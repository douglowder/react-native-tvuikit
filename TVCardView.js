'use strict';

const React = require('react');
const ReactNative = require('react-native');
const NativeMethodsMixin = ReactNative.NativeMethodsMixin;
const Platform = ReactNative.Platform;
const PropTypes = require('prop-types');
const StyleSheet = ReactNative.StyleSheet;
const ViewPropTypes = ReactNative.ViewPropTypes;
const View = ReactNative.View;

const createReactClass = require('create-react-class');
const requireNativeComponent = ReactNative.requireNativeComponent;

const ViewProps = ViewPropTypes.ViewProps;

const tvCardViewSupported = Platform.isTVOS && Platform.Version.substr(0,2) === '12';
const RCTTVCardView = tvCardViewSupported ? requireNativeComponent('RCTTVCardView', 'TVCardView') : null;

type DefaultProps = {
  title: string,
  subtitle: string,
};

type Props = $ReadOnly<{|
  ...ViewProps,
  title: string,
  subtitle?: ?string,
  imageURL?: ?string,
|}>;

const TVCARDVIEW_REFERENCE = 'tvcardview';

type Event = Object;

const TVCardView = createReactClass({
  displayName: 'TVCardView',
  mixins: [NativeMethodsMixin],

  propTypes: {
    ...ViewPropTypes,
    /**
     * Title string
     */
    title: PropTypes.string,

    /**
     * Subtitle string
     */
    subtitle: PropTypes.string,

    /**
     * Image URL
     */
    imageURL: PropTypes.string,

  },

  getDefaultProps: function(): DefaultProps {
    return {
      title: '',
    };
  },

  render: function() {
    if (tvCardViewSupported) {
      return (
        <RCTTVCardView
          {...this.props}
          ref={TVCARDVIEW_REFERENCE}
        />
      );
    } else {
      return (
        <View>
          <Text>
            TVCardView is not supported on this platform.
          </Text>
        </View>
      );
    }
  },
});

module.exports = TVCardView;
