import React from "react";

import ConctactsUser from "../../assets/img/users-solid.svg";

export const ContactsCart = () => {
    return (
        <div class="contacts">
            <div class="card">
                <div class="additional">
                    <div class="user-card">
                        <img src={ConctactsUser} alt="" />
                    </div>
                    <div class="more-info">
                        <h2>Дмитрий</h2>
                        <div class="coords">
                            <span>Group Name</span>
                            <span>Joined January 2019</span>
                        </div>
                        <div class="coords">
                            <span>Position/Role</span>
                            <span>City, Country</span>
                        </div>
                        <div class="stats">
                            <div>
                                <div class="title">Awards</div>
                                <i class="fa fa-trophy"></i>
                                <div class="value">2</div>
                            </div>
                            <div>
                                <div class="title">Matches</div>
                                <i class="fa fa-gamepad"></i>
                                <div class="value">27</div>
                            </div>
                            <div>
                                <div class="title">Pals</div>
                                <i class="fa fa-group"></i>
                                <div class="value">123</div>
                            </div>
                            <div>
                                <div class="title">Coffee</div>
                                <i class="fa fa-coffee"></i>
                                <div class="value infinity">∞</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="general">
                    <h2>Дмитрий</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce a volutpat mauris, at molestie lacus. Nam
                        vestibulum sodales odio ut pulvinar.
                    </p>
                    <span class="more">Наведите курсор для информации</span>
                </div>
            </div>

            <div class="card green">
                <div class="additional">
                    <div class="user-card">
                        <img src={ConctactsUser} alt="" />
                    </div>
                    <div class="more-info">
                        <h2>Евгений</h2>
                        <div class="coords">
                            <span>Group Name</span>
                            <span>Joined January 2019</span>
                        </div>
                        <div class="coords">
                            <span>Position/Role</span>
                            <span>City, Country</span>
                        </div>
                        <div class="stats">
                            <div>
                                <div class="title">Awards</div>
                                <i class="fa fa-trophy"></i>
                                <div class="value">2</div>
                            </div>
                            <div>
                                <div class="title">Matches</div>
                                <i class="fa fa-gamepad"></i>
                                <div class="value">27</div>
                            </div>
                            <div>
                                <div class="title">Pals</div>
                                <i class="fa fa-group"></i>
                                <div class="value">123</div>
                            </div>
                            <div>
                                <div class="title">Coffee</div>
                                <i class="fa fa-coffee"></i>
                                <div class="value infinity">∞</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="general">
                    <h2>Евгений</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce a volutpat mauris, at molestie lacus. Nam
                        vestibulum sodales odio ut pulvinar.
                    </p>
                    <span class="more">Mouse over the card for more info</span>
                </div>
            </div>
        </div>
    );
};
