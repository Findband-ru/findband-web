import React from "react";
import css from "classnames";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  getPlayerStateFromAction,
  getIconByPlayerStatus,
  removeFromEvent,
  getCurrentTime,
  attachToEvent,
  getProgress,
} from "./utils";
import Player from "./utils/constants";
import styles from "./styles";

class AudioPlayer extends React.PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    rounded: PropTypes.bool,
    classes: PropTypes.object,
    classNames: PropTypes.shape({
      player: PropTypes.string,
      loopIcon: PropTypes.string,
      playIcon: PropTypes.string,
      muteIcon: PropTypes.string,
      slider: PropTypes.string,
      track: PropTypes.string,
      thumb: PropTypes.string,
      text: PropTypes.string,
    }),
  };

  static defaultProps = {
    rounded: false,
    classes: {},
    classNames: {},
    width: "425px",
    height: "45px",
  };

  state = {
    current: 0,
    progress: 0,
    duration: 0,
    loopStatus: Player.Status.UNLOOP,
    playStatus: Player.Status.PAUSE,
    muteStatus: Player.Status.UNMUTE,
  };

  componentDidMount() {
    attachToEvent(this.player, Player.Events.CAN_PLAY, this.handleCanPlay);

    if (this.props.autoPlay) {
      this.triggerAction(Player.Status.PLAY);
    }
  }

  componentWillUnmount() {
    if (this.player) {
      removeFromEvent(
        this.player,
        Player.Events.TIME_UPDATE,
        this.handleTimeUpdate
      );
      removeFromEvent(this.player, Player.Events.CAN_PLAY, this.handleCanPlay);

      this.player = null;
    }
  }

  render() {
    const {
      src,
      classes,
      classNames: { playIcon },
    } = this.props;
    const { playStatus } = this.state;

    const PlayStatusIcon = getIconByPlayerStatus(playStatus);

    return (
      <React.Fragment>
        <audio
          ref={(node) => (this.player = node)}
          controls="true"
          preload="true"
          hidden="true"
        >
          <source src={src} />
        </audio>
        <Grid className={classes["player-centered-grid-item"]} xs={1} item>
          <PlayStatusIcon
            className={css(
              classes["player-default-icon"],
              classes["player-main-icon"],
              playIcon
            )}
            onClick={() => this.triggerAction(Player.Status.PLAY)}
            focusable="true"
          />
        </Grid>
      </React.Fragment>
    );
  }

  triggerAction = (action) => {
    const newState = getPlayerStateFromAction(this.player, action);

    if (newState) {
      this.setState(newState);
    }
  };

  handleCanPlay = (player) => {
    attachToEvent(player, Player.Events.TIME_UPDATE, this.handleTimeUpdate);

    this.setState({
      duration: player.duration,
    });
  };

  handleTimeUpdate = (player) => {
    this.setState({
      current: player.currentTime,
      progress: getProgress(player.currentTime, player.duration),
    });
  };

  handleChange = (progress, player) => {
    if (player) {
      const currentTime = getCurrentTime(progress, player.duration);

      if (!isNaN(currentTime)) {
        player.currentTime = currentTime;
      }

      this.setState({
        progress,
        currentTime,
      });
    }
  };
}

export default withStyles(styles)(AudioPlayer);
