
<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Ecommerce Website scraper</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container>
        <v-row
          align="stretch"
          style="display: flex; align-items: center; justify-content: center"
        >
          <v-card height="75" class="grey mb-8 pa-2">
            <v-row>
              <v-col cols="4">
                <v-select
                  :items="productType"
                  v-model="category"
                  filled
                  label="Category"
                ></v-select>
              </v-col>
              <v-col cols="4">
                <v-text-field label="price range" filled></v-text-field>
              </v-col>
              <!-- <v-col>
                <v-text-field label="Max price" filled></v-text-field>
              </v-col> -->
              <v-col class="" cols="4">
                <v-spacer></v-spacer>
                <v-btn
                  x-large
                  color="primary"
                  :loading="searchloading"
                  @click="getProduct()"
                  dark
                  >Search</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <v-row>
          <v-col>
            <v-data-table
              v-if="visible"
              :headers="headers"
              :items="products"
              item-key="campaign"
              class="gray"
              :search="search"
              v-model="loading"
              loading-text="Loading... Please wait"
            >
              <template v-slot:item="{ item }">
                <tr>
                  <td>
                    {{ item.title }}
                  </td>
                  <td>
                    {{ item.brand }}
                  </td>
                  <td>
                    {{ item.price }}
                  </td>
                  <td>
                    <v-btn
                      icon
                      color="green"
                      @click="viewProd(item)"
                      v-bind="attrs"
                      v-on="on"
                    >
                      View
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import axios from "axios";
// import InfiniteScroll from 'vue-infinite-scroll'

export default {
  // components: { InfiniteScroll },

  data() {
    return {
      searchloading: false,
      visible: false,
      products: [],
      productType: ["phones-tablets", "electronics", "home-office"],
      loading: false,
      category: "",
    };
  },
  created() {},
  // computed: {
  //   paginatedTokens() {
  //     if (this.searchValue !== null && this.searchValue !== "") {
  //       var result = this.tokens.filter((template) => {
  //         return (
  //           template.logoURI.toLowerCase().match(this.searchValue) ||
  //           template.name.toLowerCase().match(this.searchValue)
  //         );
  //       });
  //       return result.slice(0, this.currentPage * this.maxPerPage);
  //     }
  //     return this.tokens.slice(0, this.currentPage * this.maxPerPage);
  //   },

  //   searchResult() {
  //     let tokencoins = this.tokens;

  //     if (this.searchValue != "" && this.searchValue) {
  //       this.token.filter((item) => {
  //         return this.tokens
  //           .slice(0, this.currentPage * this.maxPerPage)
  //           .toUpperCase()
  //           .includes(this.searchValue.toUpperCase());
  //       });
  //     }
  //     return tokencoins;
  //   },
  // },

  computed: {
    headers() {
      return [
        {
          text: "Product Title",
          align: "start",
          sortable: false,
          value: "title",
        },
        {
          text: "Brand",
          sortable: false,
          value: "brand",
        },
        {
          text: "Price",
          sortable: false,
          value: "price",
        },
        {
          text: "Action",
          value: "action",
          sortable: false,
        },
      ];
    },
  },

  methods: {
    async getProduct() {
      this.visible = false;
      this.searchloading = true;
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };

      const bodyParameters = {
        category: this.category,
      };

      axios
        .post(
          "https://customscraper.herokuapp.com/getproducts",
          bodyParameters,
          config
        )
        .then((res) => {
          console.log(res);
          this.products = [];
          var d = [];
          d = res.data.data;
          for (var i in d) {
            d[i].id = i;
            this.products.push(d[i]);
            console.log(d[i]);
          }
          this.searchloading = false;
          this.visible = true;
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
    viewProd(item) {
      var prodLink = "https://www.jumia.com.ng" + item.link;
      console.log(prodLink);
      window.open(prodLink, "_newtab");
    },
  },
};
</script>
<style>
.rounded-card {
  border-radius: 50px;
}
.v-list {
  height: 300px;
  overflow-y: auto;
}
</style>