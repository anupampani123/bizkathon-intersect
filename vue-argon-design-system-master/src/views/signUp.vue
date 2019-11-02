<template>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-2 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">Sign Up for an Account
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br>
            <br>
            <br>
            <base-input style="margin:10px 20px 10px 30px" placeholder="Name" v-model="name" required></base-input>
            
            <base-input style="margin:10px 20px 10px 30px" placeholder="Email"></base-input>
            <base-input style="margin:10px 20px 10px 30px" placeholder="A/C Number"></base-input>
            <base-input style="margin:10px 20px 10px 30px" type="password" placeholder="Password"></base-input>
            <h6 style="margin:30px 20px 10px 30px"> Limit to</h6>
            <div class="row" style="margin:10px 20px 10px 30px">
                <div class="col-xs-5"><base-radio name="limit0" class="mb-3" v-model="radio.limit">
                    Nearest 1 dollar
                </base-radio>
                </div>
                <div class="col-xs-2">&nbsp;&nbsp;</div>
                <div class="col-xs-5"><base-radio name="limit1" class="mb-3" v-model="radio.limit" >
                    Nearest 5 dollars
                </base-radio></div>
            </div>
            <h6 style="margin:30px 20px 10px 30px"> Risk Profile</h6>
            <div class="row" style="margin:10px 20px 10px 30px">
                <select class="custom-select">
                    <option value="low">Low Risk</option>
                    <option value="med">Medium Risk</option>
                    <option value="high">High Risk</option>
                </select>
            </div>
            <br>
            <br>
            <router-link to="/transaction">
            <div class="btn-wrapper" style="margin:10px 20px 10px 30px">
                                    <base-button tag="a"
                                                 href="#"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 v-on:click="addUser">
                                        Done
                                    </base-button>
            </div></router-link>
            
    </div>
</template>
<script>
export default {
    data(){
        return {
            radio: {
            limit: "limit"
            },
            name:""
        }
    },
    methods: {
        addUser: function(event){
            localStorage.setItem("userName",this.name);
        }
    }
};
</script>
<style>
</style>
