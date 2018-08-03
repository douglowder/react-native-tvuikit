/**
 * Copyright (c) 2018-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTTVCardViewManager.h"
#import "RCTTVCardView.h"

@implementation RCTTVCardViewManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
    return [RCTTVCardView new];
}

RCT_EXPORT_VIEW_PROPERTY(title, NSString *)
RCT_EXPORT_VIEW_PROPERTY(subtitle, NSString *)
RCT_EXPORT_VIEW_PROPERTY(imageURL, NSString *)

@end
