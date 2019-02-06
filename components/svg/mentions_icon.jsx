// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class MentionsIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.mention'
                    defaultMessage='Mention Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='14px'
                            height='14px'
                            viewBox='0 0 20 20'
                            version='1.1'
                            role='icon'
                            aria-label={ariaLabel}
                        >
                            <g
                                stroke='none'
                                strokeWidth='1'
                                fill='inherit'
                                fillRule='evenodd'
                            >
                                <g
                                    transform='translate(-1057.000000, -31.000000)'
                                    fill='inherit'
                                >
                                    <g>
                                        <g transform='translate(1049.000000, 22.000000)'>
                                            <path d='M17.4296875,15.8867188 C15.9882812,15.8867188 15.1210938,17.0351562 15.1210938,18.96875 C15.1210938,20.8789062 15.9882812,22.0507812 17.4179688,22.0507812 C18.8945312,22.0507812 19.84375,20.8554688 19.84375,18.96875 C19.84375,17.0820312 18.90625,15.8867188 17.4296875,15.8867188 Z M17.8398438,9.125 C23.3242188,9.125 27.25,12.59375 27.25,17.7734375 C27.25,21.5117188 25.5625,23.9609375 22.7734375,23.9609375 C21.4023438,23.9609375 20.265625,23.1992188 20.078125,22.0390625 L19.9609375,22.0390625 C19.46875,23.2226562 18.4140625,23.8789062 17.0429688,23.8789062 C14.6054687,23.8789062 12.9648438,21.8867188 12.9648438,18.9101562 C12.9648438,16.0625 14.6171875,14.09375 16.9960938,14.09375 C18.25,14.09375 19.3632812,14.7382812 19.8085938,15.7460938 L19.9375,15.7460938 L19.9375,14.328125 L21.9179688,14.328125 L21.9179688,20.984375 C21.9179688,21.7578125 22.328125,22.2851562 23.171875,22.2851562 C24.4726562,22.2851562 25.421875,20.6679688 25.421875,17.8320312 C25.421875,13.5664062 22.2929688,10.7421875 17.7109375,10.7421875 C13.1640625,10.7421875 9.90625,14.140625 9.90625,18.96875 C9.90625,24.1367188 13.3515625,27.0429688 18.109375,27.0429688 C19.5625,27.0429688 21.0507812,26.84375 21.7773438,26.5390625 L21.7773438,28.15625 C20.78125,28.484375 19.4570312,28.671875 18.0273438,28.671875 C12.2382812,28.671875 8.078125,25.109375 8.078125,18.8984375 C8.078125,13.0625 12.0859375,9.125 17.8398438,9.125 Z'/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}
