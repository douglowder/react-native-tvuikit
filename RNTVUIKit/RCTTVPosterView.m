/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTTVPosterView.h"

@implementation RCTTVPosterView

-(void)setImageURL:(NSString *)imageURL {
    _imageURL = [imageURL copy];
    if (_imageURL) {
        self.image = [UIImage imageNamed:_imageURL];
    } else {
        self.image = nil;
    }
}

-(void)setImageURI:(NSString *)imageURI {
    _imageURI = [imageURI copy];
    if (_imageURI) {
        id path = _imageURI;
        NSURL *url = [NSURL URLWithString:path];
        NSData *data = [NSData dataWithContentsOfURL:url];
        UIImage *img = [[UIImage alloc] initWithData:data];
        self.imageView.image = img;
        [self.contentView addSubview:self.imageView];
    }
}

@end
