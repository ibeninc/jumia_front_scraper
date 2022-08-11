<template>
  <section>
    <!-- menuA -->
    <v-menu
      left
      v-model="menuA"
      :close-on-content-click="closeOnContentClick"
      origin="top center"
      transition="scale-transition"
      offset-y
      activator=".openMenuASwap"
    >
      <v-data-table
        :headers="headers"
        :search="searchA"
        item-key="name"
        class="elevation-1"
        hide-default-footer
        id="dataTableTokens"
        mobile-breakpoint="-1"
      >
        <template v-slot:top>
          <v-col align="center" style="padding-bottom: 0">
            <div
              style="display: flex; position: relative"
              id="searchBridgeData"
            >
              <v-text-field
                v-model="searchA"
                append-icon="mdi-magnify"
                :label="cb1"
                solo
                maxlength="20"
                class="mx-4"
                style="z-index: 1"
              >
              </v-text-field>
            </div>
          </v-col>

          <v-col align="start" style="padding-left: 24px">
            <span class="recentTitle">text10</span>
          </v-col>
          <section class="recentSection">
            <v-chip-group
              v-for="(item, index) in recentBy"
              v-bind:key="index"
              mandatory
            >
              <v-chip id="containerRecentBy" @click="SelectTokenA(item)">
                <img
                  style="margin-right: 0.625rem"
                  class="logoDataBridge"
                  :src="item.logo"
                  alt="token"
                />
                <div
                  class="colorTextoRecentBY"
                  style="display: flex; flex-direction: column"
                >
                  <span class="dataBridgeTokenName">{{ item.name }}</span>
                  <span class="dataBridgeTokenDesc">{{ item.desc }}</span>
                </div>
              </v-chip>
            </v-chip-group>
          </section>
        </template>

        <!-- desserts -->
        <template v-slot:[`item.name`]="{ item }">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-start !important;
              cursor: pointer;
            "
            class="selectionTokenBridge"
            @click="SelectTokenA(item)"
          >
            <div class="contenedorLogoDataBridge">
              <img class="logoDataBridge" :src="item.logo" alt="token" />
            </div>
            <div style="display: flex; flex-direction: column">
              <span class="dataBridgeTokenName">{{ item.name }}</span>
              <span class="dataBridgeTokenDesc">{{ item.desc }}</span>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-menu>

    <!-- menuB -->
    <v-menu
      left
      v-model="menuB"
      :close-on-content-click="closeOnContentClick"
      origin="top center"
      transition="scale-transition"
      offset-y
      activator=".openMenuBSwap"
    >
      <v-data-table
        :headers="headers"
        :search="searchB"
        item-key="name"
        class="elevation-1"
        hide-default-footer
        id="dataTableTokens"
        mobile-breakpoint="-1"
      >
        <template v-slot:top>
          <v-col align="center" style="padding-bottom: 0">
            <div
              style="display: flex; position: relative"
              id="searchBridgeData"
            >
              <v-text-field
                v-model="searchB"
                append-icon="mdi-magnify"
                label="cb1"
                solo
                maxlength="20"
                class="mx-4"
                style="z-index: 1"
              >
              </v-text-field>
            </div>
          </v-col>

          <v-col align="start" style="padding-left: 24px">
            <span class="recentTitle">text10</span>
          </v-col>

          <section class="recentSection">
            <v-chip-group
              v-for="(item, index) in recentBy"
              v-bind:key="index"
              mandatory
            >
              <v-chip id="containerRecentBy" @click="SelectTokenB(item)">
                <img
                  style="margin-right: 0.625rem"
                  class="logoDataBridge"
                  :src="item.logo"
                  alt="token"
                />
                <div
                  class="colorTextoRecentBY"
                  style="display: flex; flex-direction: column"
                >
                  <span class="dataBridgeTokenName">{{ item.name }}</span>
                  <span class="dataBridgeTokenDesc">{{ item.desc }}</span>
                </div>
              </v-chip>
            </v-chip-group>
          </section>
        </template>

        <!-- desserts -->
        <template v-slot:[`item.name`]="{ item }">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: flex-start !important;
              cursor: pointer;
            "
            class="selectionTokenBridge"
            @click="SelectTokenB(item)"
          >
            <div class="contenedorLogoDataBridge">
              <img class="logoDataBridge" :src="item.logo" alt="token" />
            </div>
            <div style="display: flex; flex-direction: column">
              <span class="dataBridgeTokenName">{{ item.name }}</span>
              <span class="dataBridgeTokenDesc">{{ item.desc }}</span>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-menu>
  </section>
</template>

<script>
export default {
  data() {
    return {
      closeOnContentClick: false,
      menuA: false,
      menuB: false,
      searchA: "",
      searchB: "",
      recentBy: null,
    };
  },
  mounted() {
    // this.recentBy = JSON.parse(localStorage.getItem("reciente"));
  },
  computed: {
    headers() {
      return [
        {
          text: "demo",
          align: "start",
          sortable: false,
          value: "name",
        },
      ];
    },
  },
  methods: {
    SelectTokenA(item) {
      this.$parent.SelectTokenA(item);
    },
    SelectTokenB(item) {
      this.$parent.SelectTokenB(item);
    },
  },
};
</script>
