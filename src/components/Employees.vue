<template>
  <v-app>
    <v-form class="ma-5">
      <!-- Add Employee Part -->
<!--      <v-container-->
<!--          align-center-->
<!--          justify-center>-->
<!--        v-if="this.admin"-->

<!--        <v-card>-->
<!--          <v-app-bar-->
<!--              dark-->
<!--              color="blue">-->
<!--            <v-card-title>-->
<!--              Add More Employees-->
<!--            </v-card-title>-->
<!--            <v-spacer></v-spacer>-->
<!--            <v-icon large>{{ icons.mdiAccount }}</v-icon>-->
<!--          </v-app-bar>-->

<!--          <v-card-text>-->
<!--            <v-row>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Employee-ID"-->
<!--                    v-model="employee.employeeID"-->
<!--                    hint="Please enter your employee-ID"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-select-->
<!--                    :items="titles"-->
<!--                    label="Title"-->
<!--                    v-model="employee.title"-->
<!--                    dense-->
<!--                    outlined></v-select>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Firstname in Thai"-->
<!--                    v-model="employee.firstNameThai"-->
<!--                    hint="Please enter your firstname in Thai"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Lastname in Thai"-->
<!--                    v-model="employee.lastNameThai"-->
<!--                    hint="Please enter your lastname in Thai"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Firstname in English"-->
<!--                    v-model="employee.firstNameEng"-->
<!--                    hint="Please enter your firstname in English"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Lastname in English"-->
<!--                    v-model="employee.lastNameEng"-->
<!--                    hint="Please enter your lastname in English"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Nickname"-->
<!--                    v-model="employee.nickname"-->
<!--                    hint="Please enter your nickname"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Subsidiary"-->
<!--                    v-model="employee.subsidiary"-->
<!--                    hint="Please enter your subsidiary"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Department"-->
<!--                    v-model="employee.department"-->
<!--                    hint="Please enter your department"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Position"-->
<!--                    v-model="employee.position"-->
<!--                    hint="Please enter your position"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Employment-Date"-->
<!--                    v-model="employee.employmentDate"-->
<!--                    hint="Please enter your employment-Date"-->
<!--                    type="date"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Phone number"-->
<!--                    v-model="employee.phone"-->
<!--                    hint="Please enter your phone number"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="Mobile number"-->
<!--                    v-model="employee.mobile"-->
<!--                    hint="Please enter your mobile number"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="EmailAddress1"-->
<!--                    v-model="employee.emailAddress1"-->
<!--                    hint="Please enter your emailAddress1"-->
<!--                    type="email"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="EmailAddress2"-->
<!--                    v-model="employee.emailAddress2"-->
<!--                    hint="Please enter emailAddress2 "-->
<!--                    type="email"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="NextApprover1"-->
<!--                    v-model="employee.nextApprover1"-->
<!--                    hint="Please enter your nextApprover1"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->

<!--              <v-col-->
<!--                  cols="12"-->
<!--                  sm="6"-->
<!--                  md="3">-->
<!--                <v-text-field-->
<!--                    label="NextApprover2"-->
<!--                    v-model="employee.nextApprover2"-->
<!--                    hint="Please enter your nextApprover2"-->
<!--                    type="text"></v-text-field>-->
<!--              </v-col>-->
<!--            </v-row>-->

<!--            <br/>-->

<!--            <v-col-->
<!--                cols="12"-->
<!--                sm="6"-->
<!--                md="3">-->
<!--              <v-btn raised class="primary" @click="onPickFile">Upload Photo</v-btn>-->
<!--              <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">-->
<!--            </v-col>-->

<!--            <v-col-->
<!--                cols="12"-->
<!--                sm="6"-->
<!--                md="3">-->
<!--              <img :src="imageUrl">-->
<!--            </v-col>-->

<!--            <v-col-->
<!--                cols="12"-->
<!--                sm="6"-->
<!--                md="3">-->
<!--              <v-btn raised class="primary" @click="onPickFile2">Upload Signature</v-btn>-->
<!--              <input type="file" style="display: none" ref="fileInput2" accept="image/*" @change="onFilePicked2">-->
<!--            </v-col>-->

<!--            <v-col-->
<!--                cols="12"-->
<!--                sm="6"-->
<!--                md="3">-->
<!--              <img :src="signatureUrl">-->
<!--            </v-col>-->

<!--            <v-col-->
<!--                cols="20"-->
<!--                sm="6"-->
<!--                md="4">-->
<!--              <v-btn x-large rounded color="green" @click="addEmployees">Add</v-btn>-->
<!--            </v-col>-->
<!--          </v-card-text>-->
<!--        </v-card>-->
<!--      </v-container>-->

      <!-- Search Part -->
      <v-container
          align-center
          justify-center>
        <v-card>
          <v-app-bar
              dark
              color="black">
            <v-card-title>
              Employee Search
            </v-card-title>
            <v-spacer></v-spacer>
            <v-icon large>mdi-magnify</v-icon>
          </v-app-bar>
          <v-card-text>
            <h2 class="MyFont2 mt-4 brown--text text-left">Please fill in the blank to search</h2>
          </v-card-text>
          <v-card-text>
            <v-row>

              <v-col
                  cols="12"
                  sm="6"
                  md="3">
                <v-text-field
                    label="Firstname in Thai"
                    v-model="search.firstNameThai"
                    type="text"></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="3">
                <v-text-field
                    label="Firstname in English"
                    v-model="search.firstNameEng"
                    type="text"></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="3">
                <v-text-field
                    label="Nickname (Thai)"
                    v-model="search.nickname"
                    type="text"></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="3">
                <v-text-field
                    label="Phone"
                    v-model="search.phone"
                    type="text"></v-text-field>
              </v-col>

              <v-col
                  cols="12"
                  sm="6"
                  md="3">
                <v-text-field
                    label="Department"
                    v-model="search.department"
                    type="text"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <br>

<!--        <v-container-->
<!--            align-center-->
<!--            justify-center>-->
<!--          <v-switch inset v-model="admin" :label="`Admin : ${admin.toString()}`"></v-switch>-->
<!--        </v-container>-->

        <h2>Searching Results ({{ this.filterSearch.length }}) : </h2>

      </v-container>

      <!-- Display Information Part -->
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <v-slide-x-reverse-transition class="py-0" group>
            <template v-for="(employee, i) in filterSearch">
              <v-col :key="i">
                <v-hover v-slot="{ hover }">
                  <v-card
                      :elevation="hover ? 12 : 2"
                      class="mb-4"
                      color="#FFD180"
                      :class="{ 'on-hover': hover }"
                      width="1100">

                    <v-layout class="black--text">
                      <v-col>
                        <v-row>

                          <h2 class="MyFont2 mt-7 ml-5">
                            <img height="170" width="170" :src="employee.photo">
                          </h2>

                          <v-col class="ml-3 mt-5">
                            <h1 class="MyFont2 blue--text text-left">ชื่อ: {{ employee.firstNameThai }}
                              {{ employee.lastNameThai }}</h1>

                            <br>

                            <h2 class="MyFont2 text-left">Tel: {{ employee.phone }}</h2>

                            <br>

                            <h2 class="MyFont2 text-left">
                              Email :
                            <a v-bind:href="'mailto:' + employee.emailAddress1">{{ employee.emailAddress1 }}</a>
                            </h2>

                          </v-col>
                        </v-row>
                      </v-col>

                      <v-dialog v-model="employee.editMode" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn class="mt-4 ml-3 mr-8" color="green" rounded v-bind="attrs" v-on="on">
                            More Info
                          </v-btn>
                        </template>
                        <v-card>

                          <v-toolbar color="#FFD180" light flat dense class="mb-6">
                            <v-icon class="mr-2" large> {{ icons.mdiAccount }}</v-icon>
                            <v-toolbar-title>Employee Detail</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn color="red" dark @click="cancelEdit(employee)">
                              <v-icon large>{{ icons.mdiClose }}</v-icon>
                            </v-btn>
                          </v-toolbar>

                          <h2 class="mt-2 ml-5">
                            <img height="150" width="150" :src="employee.photo">

                            <br>

                            <h4 class="blue--text mt-4">ชื่อ: <span class="black--text">{{
                                employee.firstNameThai
                              }} {{ employee.lastNameThai }}</span></h4>

                            <br>

                            <h4 class="blue--text">Name: <span class="black--text">{{
                                employee.title
                              }}{{ employee.firstNameEng }}
                            {{ employee.lastNameEng }}</span></h4>

                            <br>

                            <h4 class="blue--text">Nickname: <span class="black--text">{{ employee.nickname }}</span>
                            </h4>

                            <br>

                            <h4 class="blue--text">Tel: <span class="black--text">{{ employee.phone }}</span></h4>
                            <br>

                            <h4 class="blue--text">Email : <a v-bind:href="'mailto:' + employee.emailAddress1">{{ employee.emailAddress1 }}</a>
                            </h4>

                            <br>
                            <h4 class="blue--text">Department: <span class="black--text">{{
                                employee.department
                              }}</span></h4>

                            <br>
                          </h2>
                        </v-card>
                      </v-dialog>

                      <v-btn class="mt-4 ml-3 mr-8" color="red"
                             @click="deleteEmployees(employee.id, allEmployees.indexOf(employee))">
                        <v-icon color="black"> {{ icons.mdiDelete }}</v-icon>
                      </v-btn>

                    </v-layout>
                  </v-card>
                </v-hover>
              </v-col>
            </template>
          </v-slide-x-reverse-transition>
        </v-row>
      </v-container>
    </v-form>
  </v-app>
</template>

<script>
import db from '../fb.js';
import {mdiPencil, mdiDelete, mdiAccount, mdiClose} from '@mdi/js'

export default {
  name: "Employees",
  data() {
    return {
      employee: {
        employeeID: '',
        title: '',
        firstNameThai: '',
        lastNameThai: '',
        firstNameEng: '',
        lastNameEng: '',
        nickname: '',
        subsidiary: '',
        department: '',
        position: '',
        employmentDate: '',
        phone: '',
        mobile: '',
        emailAddress1: '',
        emailAddress2: '',
        photo: '',
        nextApprover1: '',
        nextApprover2: '',
        signature: '',
      },
      allEmployees: [],
      search: {
        firstNameThai: '',
        firstNameEng: '',
        nickname: '',
        phone: '',
        department: '',
      },
      icons: {
        mdiPencil,
        mdiDelete,
        mdiAccount,
        mdiClose,
      },
      admin: false,
      imageUrl: '',
      signatureUrl: '',
      titles: ["Mr.", "Mrs."]
    }
  },
  methods: {
    addEmployees() {

      // In case user do not have photo
      if (this.employee.photo === '') {
        this.employee.photo = "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg";
      }

      db.collection("employee")
          .add(this.employee)
          .then(() => this.read())
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      this.employee.employeeID = '';
      this.employee.title = '';
      this.employee.firstNameThai = '';
      this.employee.lastNameThai = '';
      this.employee.firstNameEng = '';
      this.employee.lastNameEng = '';
      this.employee.nickname = '';
      this.employee.subsidiary = '';
      this.employee.department = '';
      this.employee.position = '';
      this.employee.employmentDate = '';
      this.employee.phone = '';
      this.employee.mobile = '';
      this.employee.emailAddress1 = '';
      this.employee.emailAddress2 = '';
      this.employee.photo = '';
      this.employee.nextApprover1 = '';
      this.employee.nextApprover2 = '';
      this.employee.signature = '';
      this.imageUrl = '';
      this.signatureUrl = '';
    },
    deleteEmployees(id, index) {
      db.collection('employee')
          .doc(id)
          .delete()
          .then(() => {
            console.log("Delete Complete")
          })
          .catch((error) => {
            console.error('Error removing document: ', error);
          });
      this.allEmployees.splice(index, 1);
    },
    read() {
      const temps = []
      db.collection("employee")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const data = doc.data()
              data.editMode = false;
              data.id = doc.id;
              temps.push(data)
              // console.log(data);
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
      this.allEmployees = temps
    },
    cancelEdit(employee) {
      employee.editMode = false;
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let fileName = files[0].name
      // console.log(fileName)
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Invalid File")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.employee.photo = fileReader.result
        this.imageUrl = fileReader.result
        // console.log(this.imageUrl)
      })
      fileReader.readAsDataURL(files[0])
    },
    onPickFile2() {
      this.$refs.fileInput2.click()
    },
    onFilePicked2(event) {
      const files = event.target.files
      let fileName = files[0].name
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("Invalid File")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.employee.signature = fileReader.result
        this.signatureUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
    },
  },
  mounted() {
    this.read();
  },
  computed: {
    filterSearch() {
      return this.allEmployees.filter((td) => {
        return td.firstNameThai.match(this.search.firstNameThai) &&
            td.firstNameEng.toLowerCase().match(this.search.firstNameEng) &&
            td.nickname.match(this.search.nickname) &&
            td.phone.match(this.search.phone) &&
            td.department.match(this.search.department);
      })
    }
  }
}
</script>
