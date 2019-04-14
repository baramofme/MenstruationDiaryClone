<template>
  <v-container>
    <v-list>
      <v-list-tile class="calendar grey lighten-4">
        <v-list-tile-content>
          <v-list-tile-sub-title>
            <v-layout>
              <v-flex>
                <v-layout align-content-space-between>
                  <v-flex xs2 class="text-xs-left">진행:
                    <br>26/30
                  </v-flex>
                  <v-flex xs8></v-flex>
                  <v-flex xs2 class="text-xs-right">다음 주기:
                    <br>18-4월
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex>
                    <v-layout justify-end align-center fill-height>
                      <v-icon>arrow_back_ios</v-icon>
                    </v-layout>
                  </v-flex>
                  <v-flex xs2>
                    <div class="circle">
                      <div class="text-xs-center">
                        <v-icon large>date_range</v-icon>
                        <v-divider></v-divider>13 4월
                      </div>
                    </div>
                  </v-flex>
                  <v-flex>
                    <v-layout justify-start align-center fill-height>
                      <v-icon>arrow_forward_ios</v-icon>
                    </v-layout>
                    <div class="text-xs-left"></div>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex class="text-xs-center">안전</v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile class="memo blue lighten-4">
        <v-list-tile-action>
          <v-icon>star</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>메모</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile class="symtom yellow lighten-4">
        <v-list-tile-action>
          <v-icon>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>증상</v-list-tile-title>
          <v-list-tile-sub-title>
            <v-layout class="text-xs-center">
              <v-flex>
                <v-icon>favorite</v-icon>
                <br>유방 통증
              </v-flex>
              <v-flex>
                <v-icon>favorite</v-icon>
                <br>어지러움
              </v-flex>
              <v-flex>
                <v-icon>favorite</v-icon>
                <br>설사
              </v-flex>
            </v-layout>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile class="mood pink lighten-5">
        <v-list-tile-action>
          <v-icon>sentiment_satisfied_alt</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>기분</v-list-tile-title>
          <v-list-tile-sub-title>
            <v-layout class="text-xs-center">
              <v-flex>
                <v-icon>favorite</v-icon>
                <br>우울함
              </v-flex>
              <v-flex>
                <v-icon>favorite</v-icon>
                <br>게으름
              </v-flex>
              <v-flex>
                <v-icon>favorite</v-icon>
                <br>짜증남
              </v-flex>
            </v-layout>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile class="tip grey lighten-4">
        <v-list-tile-action>
          <v-icon>assignment_ind</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>오늘의 팁</v-list-tile-title>
          <v-list-tile-sub-title class="sub-title">
            <p>이 시기에는 피부에 특별히 신경쓰세요. 성가신 뾰루지나 여드름이 나타날 수 있으니, 물을 많이 마시고 기름지고 열량이 높은 음식을 피해서 나타날 수 없게 만드세요.</p>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<style>
.v-list {
  padding: 0px;
}
.v-list__tile {
  height: inherit;
  padding: 10px 16px;
}

.theme--light.v-divider {
  border-color: black;
  border-top: dotted 3px;
}

.circle {
  padding: 7px;
  border-radius: 50%;
  background-color: #bbb;
}

.tip .sub-title {
  white-space: unset;
}

.home {
}

.calendar {
  /* border-bottom: 3px dotted; */
}

.memo {
}

.symtom {
}

.tip {
}
</style>