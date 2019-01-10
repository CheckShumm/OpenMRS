<template>
  <v-container grid-list-xs fill-height>
    <v-layout align-center justify-center>
        <v-flex xs4>
          <v-card>
            <v-card-text >
              <v-card-title v-bind:style="{ fontSize:16 + 'px', fontWeight:500}" class='pa-0'>
                <span>
                  Login
                </span>
              </v-card-title>
              <v-text-field
                v-validate="'required|max:10'"
                v-model="username"
                label="Username"
                data-vv-name="username"
                required
              ></v-text-field>
              <v-text-field
                v-validate="'required|password'"
                type="password"
                v-model="password"
                label="Password"
                data-vv-name="password"
                required
              ></v-text-field>
            </v-card-text>
            <v-card-actions class='pb-3 pl-3 pr-3 pt-0'>
              <v-btn block @click="submit">Sign in</v-btn>
              <v-btn block @click="clear">Sign up</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<style>

</style>
