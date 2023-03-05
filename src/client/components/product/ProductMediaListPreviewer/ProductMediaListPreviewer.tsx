import classNames from 'classnames';
import type { FC } from 'react';
import { useState } from 'react';

import type { ProductFragmentResponse } from '../../../graphql/fragments';
import { AspectRatio } from '../../foundation/AspectRatio';

import { MediaItem } from './MediaItem';
import MediaItemPreviewer from './MediaItemPreviewer';
import * as styles from './ProductMediaListPreviewer.styles';

//const MediaItemPreviewer = lazy(() => import('./MediaItemPreviewer'));
type Props = {
  product: ProductFragmentResponse | undefined;
};

export const ProductMediaListPreviewer: FC<Props> = ({ product }) => {
  console.log('fooo', product);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.container()}>
      <AspectRatio ratioHeight={9} ratioWidth={16}>
        <MediaItemPreviewer file={product ? product.media[activeIndex].file : undefined} />
      </AspectRatio>
      <div className={styles.itemListWrapper()}>
        <ul className={styles.itemList()}>
          {product ? (
            product.media.map((media, index) => {
              const disabled = index === activeIndex;

              return (
                <li key={media.id} className={styles.item()}>
                  <AspectRatio ratioHeight={1} ratioWidth={1}>
                    <button
                      className={classNames(styles.itemSelectButton(), {
                        [styles.itemSelectButton__disabled()]: disabled,
                      })}
                      disabled={disabled}
                      onClick={() => setActiveIndex(index)}
                    >
                      <MediaItem file={media.file} />
                    </button>
                  </AspectRatio>
                </li>
              );
            })
          ) : (
            <p>loading</p>
          )}
        </ul>
      </div>
    </div>
  );
};
