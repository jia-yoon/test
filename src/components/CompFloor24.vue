<template>
  <div class="comp-floor-24">
    <h1>Floor 24</h1>
    <div class="floor floor-24">
      <div class="area area-1 v">
        <div class="sub-area h">
          <CompSeat id="01" />
          <CompSeat id="02" />
          <CompSeat id="03" />
          <CompSeat id="04" />
          <CompSeat id="05" />
        </div>
        <div class="sub-area h">
          <CompSeat id="06" />
          <CompSeat id="07" />
          <CompSeat id="08" />
          <CompSeat id="09" />
          <CompSeat id="10" />
        </div>
      </div>
      <div class="area area-2 v">
        <div class="sub-area h">
          <CompSeat id="11" />
          <CompSeat id="12" />
          <CompSeat id="13" />
        </div>
        <div class="sub-area h">
          <CompSeat id="14" />
          <CompSeat id="15" />
          <CompSeat id="16" />
        </div>
      </div>
      <div class="area area-3">
        <div class="sub-area h">
          <CompSeat id="17" />
          <CompSeat id="18" />
          <CompSeat id="19" />
          <CompSeat id="20" />
          <CompSeat id="21" />
          <CompSeat id="22" />
          <CompSeat id="23" />
          <CompSeat id="24" />
          <CompSeat id="25" />
          <CompSeat id="26" />
        </div>
      </div>
      <div class="area area-4">
        <div class="sub-area h">
          <CompSeat id="27" />
          <CompSeat id="28" />
        </div>
      </div>
      <div class="area area-5">
        <div class="sub-area h">
          <CompSeat id="29" />
          <CompSeat id="30" />
          <CompSeat id="31" />
          <CompSeat id="32" />
          <CompSeat id="33" />
          <CompSeat id="34" />
        </div>
      </div>
      <div class="area area-6 h">
        <div class="sub-area v">
          <CompSeat id="35" />
          <CompSeat id="36" />
          <CompSeat id="37" />
        </div>
        <div class="sub-area v">
          <CompSeat id="38" />
          <CompSeat id="39" />
          <CompSeat id="40" />
        </div>
      </div>
      <div class="area area-7 h">
        <div class="sub-area v">
          <CompSeat id="41" />
          <CompSeat id="42" />
          <CompSeat id="43" />
        </div>
        <div class="sub-area v">
          <CompSeat id="44" />
          <CompSeat id="45" />
          <CompSeat id="46" />
        </div>
      </div>
      <div class="area area-8 h">
        <div class="sub-area v">
          <CompSeat id="47" />
          <CompSeat id="48" />
          <CompSeat id="49" />
        </div>
        <div class="sub-area v">
          <CompSeat id="50" />
          <CompSeat id="51" />
          <CompSeat id="52" />
        </div>
      </div>
      <div class="area area-9 h">
        <div class="sub-area v">
          <CompSeat id="53" />
          <CompSeat id="54" />
        </div>
        <div class="sub-area v">
          <CompSeat id="55" />
          <CompSeat id="56" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompSeat from './CompSeat'
export default {
  name: 'CompFloor24',
  components: {
    CompSeat
  }
}
</script>

<style>
.comp-floor-24 {
  margin: 50px;
}
.h {
  display: flex;
}
.v {
  display: flex;
  flex-direction: column;
}
.area {
  margin: 20px;
}
</style>
