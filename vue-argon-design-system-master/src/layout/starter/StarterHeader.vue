<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <img src="img/brand/Centvest.png">
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="../index.html">
                        <img src="img/brand/Centvest-3.png">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <i class="fa fa-info-circle d-lg-none"></i>
                        <router-link  to="/starter"><span class="nav-link-inner--text">About</span></router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <i class="fa fa-cog d-lg-none"></i>
                        <router-link  to="/starter"><span class="nav-link-inner--text">How it Works</span></router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <i class="fa fa-tachometer d-lg-none"></i>
                        <router-link  to="/dashboard"><span class="nav-link-inner--text">Dashboard</span></router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <i class="fa fa-money d-lg-none"></i>
                        <router-link  to="/transaction"><span class="nav-link-inner--text">Transactions</span></router-link>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link" role="button">
                        <i class="fa fa-sign-in d-lg-none"></i>
                        <router-link  to="/signup"><span class="nav-link-inner--text">Sign Up</span></router-link>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-collection d-lg-none"></i>
                        <span class="nav-link-inner--text">Docs</span>
                    </a>
                    <div class="dropdown-menu">
                        <router-link to="/landing" class="dropdown-item">Landing</router-link>
                        <router-link to="/profile" class="dropdown-item">Profile</router-link>
                        <router-link to="/login" class="dropdown-item">Login</router-link>
                        <router-link to="/register" class="dropdown-item">Register</router-link>
                    </div>
                </li>
            </ul>
            
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton
  }
};
</script>
<style>
</style>
