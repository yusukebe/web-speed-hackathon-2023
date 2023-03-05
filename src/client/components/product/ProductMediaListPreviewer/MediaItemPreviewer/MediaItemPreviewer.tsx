import classNames from 'classnames';
import type { FC } from 'react';

import type { MediaFileFragmentResponse } from '../../../../graphql/fragments';
import { getMediaType } from '../../../../utils/get_media_type';
import { DeviceType, GetDeviceType } from '../../../foundation/GetDeviceType';
import { Image } from '../../../foundation/Image';

import * as styles from './MediaItemPreiewer.styles';

type Props = {
  file: MediaFileFragmentResponse | undefined;
};

export const MediaItemPreviewer: FC<Props> = ({ file }) => {
  const filename = file ? file.filename : '/images/gray.webp';
  const type = getMediaType(filename);
  return (
    <div className={styles.container()}>
      {type === 'image' && <Image fill src={filename.replace(/\.webp$/, '.big.webp')} />}
      {type === 'video' && (
        <GetDeviceType>
          {({ deviceType }) => (
            <video
              autoPlay
              controls
              muted
              playsInline
              className={classNames(styles.video(), {
                [styles.video__desktop()]: deviceType === DeviceType.DESKTOP,
                [styles.video__mobile()]: deviceType === DeviceType.MOBILE,
              })}
              src={filename}
            />
          )}
        </GetDeviceType>
      )}
    </div>
  );
};
