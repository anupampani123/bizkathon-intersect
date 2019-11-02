<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-3 shape-default shape-skew">
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
                                <h1 class="display-3  text-white">Transactions
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <br>
        <br>
        <div>
            <h5>Statements</h5>
            <div>
                <table class="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col"><i class="fa fa-clock-o" aria-hidden="true"></i></th>
                    <th scope="col"><i class="fa fa-tag" aria-hidden="true"></i></th>
                    <th scope="col">$</th>
                    <th scope="col"><i class="fa fa-money" aria-hidden="true"></i></th>
                    </tr>
                </thead>
                <tbody id="tableB" v-html="tableData">
                </tbody>
                </table>
            </div>
            <br>
            <br>
            <div>
                <h5 style="margin:10px 20px 10px 30px">Add a new transaction </h5>
                <!--<base-input style="margin:10px 20px 10px 30px" placeholder="Time" v-model="time" ></base-input>-->
                <!--<base-input style="margin:10px 20px 10px 30px" placeholder="Category" v-model="category"></base-input>-->
                <div class="row" style="margin:10px 20px 10px 30px">
                <select class="custom-select" v-model="category">
                     <option disabled value="">Please select one</option>
                    <option>Food</option>
                    <option>Entertainment</option>
                    <option>Travel</option>
                    <option>Gifts</option>
                    <option>Leisure</option>
                </select>
                </div>
                <div style="margin:20px 20px 10px 30px">
                <label class="display-5">Amount: ${{amount}}</label>
                <br>
                <base-slider v-model="amount"></base-slider>
                </div>
                <div class="btn-wrapper" style="margin:20px 20px 10px 30px">
                                    <base-button tag="a"
                                                 href="#"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 v-on:click="addTrans">
                                        Add
                                    </base-button>
            </div>
            </div>
        </div>
        

    </div>
</template>
<script>
export default {
    data() {
      return {
        items: [
          { Time: '14:32', Category: 'Food', Amount: 10.44,Invested:0.56 }
        ],
        category: "",
        amount: ""
      }
    },
    computed: {
        tableData: function(){
            var ans="<tbody>";
            for(var i=0;i<this.items.length;i++){
                ans+="<tr> <th scope='row'>"+(i+1)+"</th> <td>"+this.items[i]["Time"]+"</td> <td>"+this.items[i]["Category"]+"</td> <td>$"+this.items[i]["Amount"]+"</td> <td>$"+this.items[i]["Invested"]+"</td> </tr>"
            }
            ans+="</tbody>";
            return ans;
        }
    },
    methods: {
        addTrans: function(event){
            var inv = Math.ceil(this.amount) - this.amount;
            var today = new Date();
            var t = today.getHours() + ":" + today.getMinutes();
            this.items.push({Time:t,Category:this.category,Amount:this.amount,Invested:inv.toFixed(2)});
            this.amount="";
            this.category="";
            return false;
        }
        
    }
};
</script>
<style>
</style>
