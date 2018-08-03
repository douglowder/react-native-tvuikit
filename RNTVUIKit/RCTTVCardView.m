/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTTVCardView.h"

@implementation RCTTVCardView

-(void)setImageURL:(NSString *)imageURL {
    _imageURL = [imageURL copy];
    if (_imageURL) {
        UIImage *image = [UIImage imageNamed:_imageURL];
        self.imageView = [UIImageView new];
        self.imageView.image = image;
        [self.contentView addSubview:self.imageView];
    } else {
        [self.imageView removeFromSuperview];
        self.imageView = nil;
    }
}

@end
