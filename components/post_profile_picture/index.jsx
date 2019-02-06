// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';

import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getUser, getStatusForUserId} from 'mattermost-redux/selectors/entities/users';

import PostProfilePicture from './post_profile_picture';

function mapStateToProps(state, ownProps) {
    const config = getConfig(state);

    return {
        enablePostIconOverride: config.EnablePostIconOverride === 'true',
        hasImageProxy: config.HasImageProxy === 'true',
        status: getStatusForUserId(state, ownProps.userId),
        user: getUser(state, ownProps.userId),
    };
}

export default connect(mapStateToProps)(PostProfilePicture);
