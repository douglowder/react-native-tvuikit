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

const tvPosterViewSupported = Platform.isTVOS && Platform.Version.substr(0,2) === '12';
const RCTTVPosterView = tvPosterViewSupported ? requireNativeComponent('RCTTVPosterView', 'TVPosterView') : null;

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

const TVPOSTERVIEW_REFERENCE = 'tvposterview';

type Event = Object;

const TVPosterView = createReactClass({
  displayName: 'TVPosterView',
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
    if (tvPosterViewSupported) {
      return (
        <View>
        <RCTTVPosterView
          {...this.props}
          ref={TVPOSTERVIEW_REFERENCE}
          style={[styles.tvposterview, this.props.style]}
        />
        </View>
      );
    } else {
      return (
        <View>
          <Text>
            TVPosterView is not supported on this platform.
          </Text>
        </View>
      );
    }
  },
});

const styles = StyleSheet.create({
  tvposterview: {
    height: 300,
    width: 300 
  },
});

// module.exports = ((TVPosterView: any): Class<
//   ReactNative.NativeComponent<Props>,
// >);
module.exports = TVPosterView;
