<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                            <br>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="success" size="sm" class="mr-4" icon="fa fa-money" >Spend</base-button>
                                    <base-button type="primary" size="sm" class="mr-4" icon="fa fa-refresh">Reset</base-button>
                                    <base-button type="info" size="sm" class="mr-4" icon="fa fa-cog"></base-button>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>{{userName}}
                            </h3>
                            <br>
                            <span class="font-weight-light">Social Score: 78</span>
                        </div>
                        <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">${{totalInvestment}}</span>
                                        <span class="description">Invested</span>
                                    </div>
                                    <div>
                                        <span class="heading">${{returns}}</span>
                                        <span class="description">Returns</span>
                                    </div>
                                    <div>
                                        <span class="heading">38%</span>
                                        <span class="description">Risk</span>
                                    </div>
                                </div>
                            </div>
                            <div id="chart" >
                                <h5> Daily Invested Amount</h5>
                                <br>
                                <img src="img/brand/chart1.png">
                            </div>
                            <br>
                            <br>
                            <div>
                            </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    computed: {
        totalInvestment: function(){
            
            return localStorage.getItem('totalInvestment');
        },
        returns: function(){
            return (parseFloat(this.totalInvestment) * 0.30).toFixed(4);
        },
        userName: function(){
            return localStorage.getItem('userName');
        }
    }
};
</script>
<style>
</style>
