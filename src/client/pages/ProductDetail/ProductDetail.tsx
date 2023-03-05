import type { FC } from 'react';
import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { WidthRestriction } from '../../components/foundation/WidthRestriction';
import ProductMediaListPreviewer from '../../components/product/ProductMediaListPreviewer';
//import { ProductOverview } from '../../components/product/ProductOverview';
//import { ProductPurchaseSection } from '../../components/product/ProductPurchaseSeciton';
//import { ReviewSection } from '../../components/review/ReviewSection';
import { useActiveOffer } from '../../hooks/useActiveOffer';
import { useAmountInCart } from '../../hooks/useAmountInCart';
import { useAuthUser } from '../../hooks/useAuthUser';
import { useProduct } from '../../hooks/useProduct';
import { useReviews } from '../../hooks/useReviews';
import { useSendReview } from '../../hooks/useSendReview';
import { useUpdateCartItem } from '../../hooks/useUpdateCartItems';
import { useOpenModal } from '../../store/modal';
import { normalizeCartItemCount } from '../../utils/normalize_cart_item';

//const ProductMediaListPreviewer = lazy(() => import('../../components/product/ProductMediaListPreviewer'));
const ProductOverview = lazy(() => import('../../components/product/ProductOverview'));
const ProductPurchaseSection = lazy(() => import('../../components/product/ProductPurchaseSeciton'));
const ReviewSection = lazy(() => import('../../components/review/ReviewSection'));

import * as styles from './ProductDetail.styles';

export const ProductDetail: FC = () => {
  const { productId } = useParams();

  let { product } = useProduct(Number(productId));
  const { reviews } = useReviews(product?.id);
  const { isAuthUser } = useAuthUser();
  const { sendReview } = useSendReview();
  const { updateCartItem } = useUpdateCartItem();
  const handleOpenModal = useOpenModal();
  const { amountInCart } = useAmountInCart(Number(productId));
  const { activeOffer } = useActiveOffer(product);

  const handleSubmitReview = ({ comment }: { comment: string }) => {
    sendReview({
      variables: {
        comment,
        productId: Number(productId),
      },
    });
  };

  const handleUpdateItem = (productId: number, amount: number) => {
    updateCartItem({
      variables: { amount: normalizeCartItemCount(amount), productId },
    });
  };

  if (!product) {
    const blankProduct = {
      description: '',
      id: 0,
      media: [
        {
          file: {
            filename: '',
            id: 0,
          },
          id: 0,
          isThumbnail: false,
        },
      ],
      name: '',
      offers: [],
      price: 0,
      reviews: [],
    };
    product = blankProduct;
  }

  return (
    <>
      {product && (
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
      )}

      <WidthRestriction>
        <div className={styles.container()}>
          <section className={styles.details()}>
            <ProductMediaListPreviewer product={product} />
            <div className={styles.overview()}>
              <Suspense fallback="">
                <ProductOverview activeOffer={activeOffer} product={product} />
              </Suspense>
            </div>
            <div className={styles.purchase()}>
              <Suspense fallback="">
                <ProductPurchaseSection
                  amountInCart={amountInCart}
                  isAuthUser={isAuthUser}
                  onOpenSignInModal={() => handleOpenModal('SIGN_IN')}
                  onUpdateCartItem={handleUpdateItem}
                  product={product}
                />
              </Suspense>
            </div>
          </section>

          <section className={styles.reviews()}>
            <h2 className={styles.reviewsHeading()}>レビュー</h2>
            <Suspense fallback="">
              <ReviewSection hasSignedIn={isAuthUser} onSubmitReview={handleSubmitReview} reviews={reviews} />
            </Suspense>
          </section>
        </div>
      </WidthRestriction>
    </>
  );
};
