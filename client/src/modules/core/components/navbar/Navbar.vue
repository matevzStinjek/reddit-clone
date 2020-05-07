<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Reddit.com</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" />
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Home" class="home-dropdown" right>
                        <b-dropdown-item href="#">Home</b-dropdown-item>
                        <b-dropdown-item href="#">Popular</b-dropdown-item>
                        <b-dropdown-item href="#">All</b-dropdown-item>
                        <b-dropdown-item href="#">Top Communities</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-form>
                        <b-input-group>
                            <b-input-group-prepend>
                                <b-button size="sm" class="my-2 my-sm-0" type="submit"><b-icon-search /></b-button>
                            </b-input-group-prepend>
                            <b-form-input size="md" class="search" placeholder="Search" />
                        </b-input-group>
                    </b-nav-form>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <b-button size="sm" class="my-2 mr-2 my-sm-0" type="submit"><b-icon-person-fill /></b-button>
                            <em>Username</em>
                        </template>
                        <b-dropdown-item href="#">My Profile</b-dropdown-item>
                        <b-dropdown-item href="#">User Settings</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped lang="scss">
.home-dropdown {
    width: 160px;
}

.search, .search:focus {
    background-color: #444;
    color: #fff;
}
</style>
