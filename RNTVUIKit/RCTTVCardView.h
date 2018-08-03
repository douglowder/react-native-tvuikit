/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>
#import <TVUIKit/TVUIKit.h>

NS_ASSUME_NONNULL_BEGIN

API_AVAILABLE(tvos(12.0))
@interface RCTTVCardView : TVCardView

@property(nonatomic, nullable, copy) NSString *title;
@property(nonatomic, nullable, copy) NSString *subtitle;
@property(nonatomic, nullable, copy) NSString *imageURL;
@property(nonatomic, nullable, strong) UIImageView *imageView;

@end

NS_ASSUME_NONNULL_END
