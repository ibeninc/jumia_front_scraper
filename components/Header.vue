<template>
  <v-app-bar id="headerApp" class="main-header" style="box-shadow: none">
    <WalletAlert ref="walletAlert"></WalletAlert>

    <v-row align="center" justify="start">
      <!-- mobile -->
      <v-btn class="toggle verMobile" @click.stop="drawer = !drawer">
        <v-icon medium>mdi-menu</v-icon>
      </v-btn>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        height="900"
        temporary
        right
        id="drawerColor"
      >
        <!-- list 1 -->
        <v-list id="drawerColor">
          <v-list-item
            v-for="(item, index) in dataDrawerA"
            :key="item.title"
            :href="item.to"
            link
          >
            <v-list-item-content>
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
                v-bind:key="index"
              >
                <a :href="item.to" id="textsMobile" class="text-h6">{{
                  item.title
                }}</a>
                <v-chip
                  v-if="item.add"
                  color="orange"
                  filter
                  label
                  outlined
                  id="soon2"
                >
                  {{ item.add }}
                </v-chip>
              </div>
            </v-list-item-content>
          </v-list-item>
          <!-- list 2 -->
          <v-list-item
            v-for="(item, index) in dataDrawerB"
            v-bind:key="index"
            @mousedown="changeArrow(item)"
            @mouseleave="changeArrowFocusOut(item)"
            :class="{
              openMenuBridgeMobile: item.openA,
              openMenuBanderasMobile: item.openB,
            }"
          >
            <v-list-item-content>
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <a id="textsMobile" class="text-h6">{{ item.title }}</a>
                <v-icon medium class="flechita2" v-if="item.open"
                  >mdi-chevron-down</v-icon
                >
                <v-icon medium class="flechita2" v-else>mdi-chevron-up</v-icon>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- desktop -->
      <v-col class="eliminarMobile3 paddPreMobile">
        <div style="display: flex; direction: row; align-items: center">
          <img
            id="logoPrincipal"
            :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`"
            alt="logo"
          />
          <a href="#/" id="titulo" class="h2-em">KOLLECTPAY</a>
        </div>
      </v-col>
      <template v-for="(item, index) in items" class="eliminarMobile3">
        <v-col
          v-bind:key="index"
          id="ajustarHeader"
          class="eliminarMobile3 paddPreMobile"
        >
          <a
            :href="item.to"
            id="texts"
            class="h7-em"
            :class="{ openMenuBridge: item.open }"
          >
            {{ item.name }}
          </a>
          <template v-for="(item2, index) in item.add">
            <span id="soon" class="h7-em" v-bind:key="index">
              {{ item2 }}
            </span>
          </template>
        </v-col>
      </template>

      <v-spacer />
      <v-spacer />
      <v-spacer />

      <v-row align="center" justify="end">
        <v-col class="padd2">
          <div style="display: flex; justify-content: end">
            <v-tooltip color="transparent" bottom open-delay="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-if="!IconoTheme"
                  class="boton"
                  v-bind="attrs"
                  v-on="on"
                  @click="CambiarTheme('dark')"
                >
                  <v-icon id="iconoTheme" medium> mdi-weather-night </v-icon>
                </v-btn>
                <v-btn
                  v-else
                  class="boton"
                  v-bind="attrs"
                  v-on="on"
                  @click="CambiarTheme('light')"
                >
                  <v-icon id="iconoTheme" medium> mdi-weather-sunny </v-icon>
                </v-btn>
              </template>
              <div id="tooltip"></div>
            </v-tooltip>

            <v-btn class="boton eliminarMobile3 openMenuBanderas">
              <img class="bandera" :src="idiomaA" alt="bandera" />
            </v-btn>
          </div>
        </v-col>

        <v-col class="padd eliminarMobile">
          <div
            style="
              display: flex;
              direction: row;
              align-items: center;
              justify-content: center;
            "
          >
            <img
              class="token"
              :src="`${$store.state.baseURL}themes/${$store.state.theme}/logo.png`"
              alt="token"
            />
            <span id="texts" class="h6">$0</span>
          </div>
        </v-col>

        <v-col style="margin: 0; padding: 0">
          <v-col class="paddPreMobile">
            <aside v-for="(item, index) in dataLoginWallet" v-bind:key="index">
              <div
                v-bind:key="index"
                v-show="item.show"
                id="containerWallet"
                :class="{ menuLogOut: item.logOut, dialogLogIng: item.logIn }"
                style="
                  display: flex;
                  direction: row;
                  align-items: center;
                  cursor: pointer;
                "
              >
                <img
                  v-bind:key="index"
                  v-if="item.logo"
                  class="wallet"
                  :src="item.logo"
                  alt="logo"
                />
                <a href="#">
                  <h3 id="texts2" class="h7">{{ item.texto }}</h3>
                </a>
              </div>
            </aside>
          </v-col>

          <MenuHeader ref="menu"></MenuHeader>
        </v-col>
      </v-row>
    </v-row>
  </v-app-bar>
</template>

<script>
import WalletAlert from "~/components/WalletAlert";
import MenuHeader from "~/components/Headertopmenu";

//import { i18n } from "@/plugins/i18n";

export default {
  name: "Header",
  components: {
    WalletAlert,
    MenuHeader,
  },
  created() {
    // this.element = document.getElementById("theme");
    // const theme = localStorage.getItem("theme");
    // if (theme) {
    //   this.CambiarTheme(theme);
    // }
    // if (theme == "dark") {
    //   this.IconoTheme = true;
    // }
    // if (theme == "light") {
    //   this.IconoTheme = false;
    // }
  },
  mounted() {
    this.data = this.dataDrawer;

    console.log(localStorage.language);
    this.changeLanguaje(localStorage.language);
  },
  computed: {
    computedItems() {
      return this.data.map(this.mapItem);
    },
  },
  data() {
    return {
      element: null,
      IconoTheme: true,
      drawer: null,
      dataDrawerA: [
        {
          title: "Swap",
          to: "#/",
          add: null,
        },
        {
          title: "Pool",
          to: "#/addRemove",
          add: null,
        },
        {
          title: "Stake",
          to: "#",
          add: "soon",
        },
        {
          title: "Lending",
          to: "#",
          add: "soon",
        },
      ],
      dataDrawerB: [
        {
          title: "Bridge",
          open: true,
          openA: true,
        },
        {
          title: "English",
          open: true,
          openB: true,
        },
      ],
      // items: [
      //   {
      //     index: 1,
      //     name: "Swap",
      //     to: "#/",
      //     add: null,
      //   },
      //   {
      //     index: 2,
      //     name: "Pool",
      //     to: "#/addRemove",
      //     add: null
      //   },
      //   {
      //     index: 3,
      //     name: "Stake",
      //     to: "#",
      //     add: {
      //       soon: "soon"
      //     }
      //   },
      //   {
      //     index: 4,
      //     name: "Lending",
      //     to: "#",
      //     add: {
      //       soon: "soon"
      //     }
      //   },
      //   {
      //     index: 5,
      //     name: "Bridge",
      //     add: null,
      //     open: true
      //   }
      // ],
      idiomaA: require("~/assets/USA.png"),
      dataLoginWallet: [
        {
          logo: null,
          texto: "Connect Wallet",
          show: true,
          logOut: false,
          logIn: true,
        },
        {
          texto: "0x7885438272",
          show: false,
          logOut: true,
          logIn: false,
        },
      ],
    };
  },
  //   mounted() {
  //   this.data = this.$t("dataDrawer");

  //   console.log(localStorage.language);
  //   this.changeLanguaje(localStorage.language);
  // },
  // computed: {
  //   computedItems() {
  //     return this.data.map(this.mapItem);
  //   },
  // },
  methods: {
    //   mapItem(item) {
    //   return {
    //     ...item,
    //     children: item.children ? item.children.map(this.mapItem) : undefined,
    //     title: this.$t(item.title),
    //   };
    // },
    // logout() {
    //   let action = Moralis.User.logOut();
    //   this.isLoggedin = false;
    //   console.log(action);
    //   // this.$router.go();
    // },
    async logOut() {
      // await web3Modal.clearCachedProvider()
      this.dataLoginWallet[0].show = true;
      this.dataLoginWallet[1].show = false;
    },
    walletAccessKeplr() {
      if (typeof window.ethereum !== "undefined") {
        //if keplr installed, connect wallet
        this.dataLoginWallet[0].show = false;
        this.dataLoginWallet[1].show = true;
        this.dataLoginWallet[1].logo = require("~/assets/keplr.png");
        this.$refs.menu.dialog = false;
      } else {
        //if not is installed keplr, go install
        console.log("Need install Keplr Extension");
        this.$refs.walletAlert.AlertWalletKeplr();
        this.$refs.menu.dialog = false;
      }
    },
    walletAccessMetamask() {
      if (typeof window.ethereum !== "undefined") {
        //if metamask installed, connect wallet
        window.ethereum.request({ method: "eth_requestAccounts" });
        this.dataLoginWallet[0].show = false;
        this.dataLoginWallet[1].show = true;
        this.dataLoginWallet[1].logo = require("~/assets/metamask.png");
        this.$refs.menu.dialog = false;
      } else {
        //if not is installed metamask, go install
        console.log("Need install MetaMask Extension");
        this.$refs.walletAlert.AlertWalletMetamask();
        this.$refs.menu.dialog = false;
      }
    },
    walletAccessConnect() {
      if (typeof window.ethereum !== "undefined") {
        //if connect installed, connect wallet
        this.dataLoginWallet[0].show = false;
        this.dataLoginWallet[1].show = true;
        this.dataLoginWallet[1].logo = require("~/assets/keplrMobile.png");
        this.$refs.menu.dialog = false;
      } else {
        //if not is installed connect, go install
        console.log("Need install Connect Extension");
        this.$refs.walletAlert.AlertWalletConnectKeplr();
        this.$refs.menu.dialog = false;
      }
    },
    CambiarTheme(theme) {
      this.$store.dispatch("CambiarTheme", { theme, element: this.element });
      this.IconoTheme = !this.IconoTheme;
      // if (this.IconoTheme === false) {
      //   this.IconoTheme = true
      //   // this.$refs.data.$refs.chart.cambiarDark();
      // } else {
      //   this.IconoTheme = false
      // }
    },
    changeArrow(item) {
      item.open = !item.open;
    },
    changeArrowFocusOut(item) {
      if (item.open === false) {
        item.open = !item.open;
      }
    },
    flagSelected(item) {
      this.idiomaA = item.country;
      this.dataDrawerB[1].title = item.name;
    },
    changeLanguaje(lang) {
      if (lang === "ES") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else if (lang === "US") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else if (lang === "CH") {
        localStorage.language = lang;
        i18n.locale = lang;
      } else {
        localStorage.language = "US";
        i18n.locale = lang;
      }
      console.log(lang);
    },
    //   changeLanguaje(lang) {
    //   if (lang === "US") {
    //     localStorage.language = lang;
    //     i18n.locale = lang;
    //     console.log(localStorage.language);
    //   }
    //   if (lang === "ES") {
    //     localStorage.language = lang;
    //     i18n.locale = lang;
    //     console.log(localStorage.language);
    //   }
    //   else {
    //     localStorage.language = lang;
    //     i18n.locale = lang;
    //     console.log(localStorage.language);
    //   }
    // },
  },
};
</script>

<style scoped>
.menuLogOut {
  cursor: pointer;
}
.dialogLogIn {
  cursor: pointer;
}
.openMenuBridgeMobile {
  cursor: pointer;
}
.openMenuBridge {
  cursor: pointer;
}
.openMenuBanderasMobile {
  cursor: pointer;
}
.openMenuBanderas {
  cursor: pointer;
}
.main-header .v-list .v-list-item:hover {
  background-color: #f3f5ff;
  transition: 0.15s ease-in-out;
}
.main-header .v-list .v-list-item:hover:before {
  opacity: 0;
}
.main-header .v-list .v-list-item:hover .v-list-item__icon .v-icon {
  color: rgba(83, 109, 254, 0.8) !important;
}
.main-header .v-list .link-item {
  cursor: pointer;
}
.main-header .v-btn:hover:before {
  top: 2px;
  left: 2px;
  bottom: 2px;
  right: 2px;
}
.v-list-item {
  transition: 0.2s ease-in;
}
h3 {
  margin: auto !important;
}
#headerApp {
  z-index: 50;
  max-width: 100% !important;
  height: auto !important;
}
#titulo {
  /* h3 */
  font-family: "Syncopate", sans-serif !important;
  font-style: normal;
  font-weight: bold !important;
  padding-top: 7px !important;
  background-clip: text;
  -webkit-background-clip: text;
}
#logoPrincipal {
  width: 2.769375rem !important;
  height: 2.794375rem !important;
  margin: 0px 10px;
}
.logo {
  width: 3.069375rem !important;
  height: 2.594375rem !important;
  margin: 0px 10px;
}
a {
  text-decoration: none !important;
}
#texts {
  /* Swap */
  font-family: "Mulish", sans-serif !important;
  font-style: normal;
  font-weight: normal !important;
  /* Inside auto layout */
  margin-left: 0.625rem;
}
#texts2 {
  /* Swap */
  font-family: "Mulish", sans-serif !important;
  font-style: normal;
  font-weight: normal !important;
  /* Inside auto layout */
  margin-left: 0.625rem;
}
#textsMobile {
  /* Swap */
  display: flex !important;
  font-family: "Mulish", sans-serif !important;
  font-style: normal;
  font-weight: normal !important;
}
#soon {
  margin: 0;
  height: 2.2rem;
  padding: 0% 5%;
  margin-left: 8px;
  font-family: "Mulish", sans-serif;
  font-style: normal;
  font-weight: normal;
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
}
#soon2 {
  width: 3rem !important;
  height: 1.65rem !important;
  font-size: 0.7rem !important;
  padding: 0px 6.5px !important;
  margin-left: 3px;
  font-family: "Mulish", sans-serif !important;
  font-style: normal;
  font-weight: normal !important;
  border-radius: 6px !important;
  cursor: default;
}
.bandera {
  width: 38px;
  height: 28px;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
}
.v-list-item-b {
  min-height: auto !important;
  height: 2.275rem !important;
}
.containerBanderaChange {
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 5px;
  height: 1.2rem;
  cursor: pointer;
  transition: 0.2s ease-in;
}
.banderaChange {
  width: 2rem;
  height: 1.1rem;
  margin: 0px 5px;
}
.tituloBanderaChange {
  font-family: "General Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400 !important;
  margin: 0 !important;
}
.boton {
  /* Auto layout */
  min-width: auto !important;
  width: 44px !important;
  height: 37px !important;
  margin: 5px;
  padding: 0 !important;
  overflow: hidden !important;
  border-radius: 12.3333px !important;
}
.token {
  /* image 5 */
  width: 1.295rem;
  height: 1.094375rem;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0.625rem;
}
.wallet {
  width: 1.3rem;
  height: 1.3rem;
  /* Inside auto layout */
  margin: 0px 10px;
}
#containerWallet {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 13.1375rem;
  height: 3.3125rem;
  /* Linear */
  font-family: "Mulish", sans-serif !important;
  font-weight: bold !important;
  border-radius: 30px;
  margin: 0px 10px;
  overflow: hidden;
}
.padd {
  padding: 0 !important;
  margin: 0 !important;
}
.padd2 {
  padding: 0 !important;
  margin: 0 !important;
}
sup:nth-child(1) {
  top: -2px !important;
}
.contenedorBridge {
  height: 2.17rem;
  padding: 0.459905625rem;
  border-radius: 7.35849px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in;
}
#textoLinkBridge {
  margin-bottom: 0;
  font-family: "General Sans", sans-serif !important;
  font-style: normal;
  font-weight: 400 !important;
}
.v-dialog {
  border-radius: 30px !important;
  scroll-behavior: smooth;
}
.v-dialog::-webkit-scrollbar {
  width: 18px;
  height: 18px;
  border-radius: 10em;
}
.v-dialog::-webkit-scrollbar-thumb {
  border-radius: 1em;
}
#tituloContainerWallet {
  font-family: "Mulish", sans-serif !important;
  margin-top: 6px !important;
}
.connectWallet {
  border-radius: 30px !important;
  width: 396px;
  height: 402.32px;
  overflow: hidden;
}
.containerChangeWallet {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 30px;
  width: 314px;
  height: 78.42px;
  margin-top: 20px !important;
  overflow: hidden;
}
.logoChangeWallet {
  width: 3.65125rem;
  height: 3.65125rem;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 14px;
}
#titleWallet {
  font-family: "General Sans", sans-serif !important;
  font-style: normal;
  font-weight: 600 !important;
}
#textoWallet {
  /* p4 small */
  font-family: "General Sans", sans-serif !important;
  font-style: normal;
  font-weight: 300;
}
.toggle {
  /* Inside auto layout */
  order: 0;
  z-index: 10;
}
.verMobile {
  display: none !important;
}
.display {
  display: none;
}
#ajustarHeader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
