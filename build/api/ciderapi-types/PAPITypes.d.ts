// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
declare namespace PAPITypes {
    declare namespace App {
      type Ready = {}
    }
    declare namespace Shell {
      type LayoutTypeChanged = {
        type: 'immersive' | 'miniplayer' | 'browser'
      }
      type ImmersiveOpened = {}
      type ImmersiveClosed = {}
      type MiniplayerOpened = {}
      type MiniplayerClosed = {}
    }
    declare namespace Music {
      type SetRatingChanged = {
        /**
         * ID of the Item
         */
        id: string;
        /**
         * Item type
         */
        type: number;
        /**
         * -1: Disliked
         * 0: Not rated
         * 1: Liked
         */
        rating: -1 | 0 | 1;
      }
    }
  }
