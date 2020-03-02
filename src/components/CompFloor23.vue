<template>
  <div class="comp-floor-23">
    <h1>Floor 23</h1>
    <div class="floor floor-23">
      <div class="area area-1">
        <div class="sub-area h">
          <CompSeat id="01" />
          <CompSeat id="02" />
          <CompSeat id="03" />
          <CompSeat id="04" />
          <CompSeat id="05" />
          <CompSeat id="06" />
          <CompSeat id="07" />
          <CompSeat id="08" />
        </div>
      </div>
      <div class="area-group h">
       <div class="area area-2 h">
         <div class="sub-area v">
           <CompSeat id="09" />
           <CompSeat id="10" />
           <CompSeat id="11" />
           <CompSeat id="12" />
           <CompSeat id="13" />
           <CompSeat id="14" />
        </div>
        <div class="sub-area v">
          <CompSeat id="15" />
          <CompSeat id="16" />
          <CompSeat id="17" />
          <CompSeat id="18" />
          <CompSeat id="19" />
          <CompSeat id="20" />
        </div>
      </div>
      <div class="area area-3 h">
        <div class="sub-area v">
         <CompSeat id="21" />
         <CompSeat id="22" />
         <CompSeat id="23" />
         <CompSeat id="24" />
         <CompSeat id="25" />
         <CompSeat id="26" />
        </div>
        <div class="sub-area v">
         <CompSeat id="27" />
         <CompSeat id="28" />
         <CompSeat id="29" />
         <CompSeat id="30" />
         <CompSeat id="31" />
         <CompSeat id="32" />
         </div>
      </div>
     <div class="area area-4 v">
       <div class="sub-area h">
        <CompSeat id="33" />
        <CompSeat id="34" />
        </div>
      <div class="sub-area h">
        <CompSeat id="35" />
        <CompSeat id="36" />
        </div>
       </div>
       <div class="area area-5 h">
        <div class="sub-area v">
        <CompSeat id="37" />
        <CompSeat id="38" />
        <CompSeat id="39" />
        <CompSeat id="40" />
        <CompSeat id="41" />
        </div>
          <div class="sub-area v">
        <CompSeat id="42" />
        <CompSeat id="43" />
        <CompSeat id="44" />
        <CompSeat id="45" />
        <CompSeat id="46" />
        </div>
      </div>
      <div class="area area-6 v">
        <CompSeat id="47" />
        <CompSeat id="48" />
        <CompSeat id="49" />
        <CompSeat id="50" />
        <CompSeat id="51" />
        <CompSeat id="52" />
      </div>
      <div class="area area-7 v">
        <CompSeat id="53" />
        <CompSeat id="54" />
        <CompSeat id="55" />
        <CompSeat id="56" />
        <CompSeat id="57" />
        <CompSeat id="58" />
      </div>
      <div class="area-group v">
      <div class="area area-8 v">
        <div class="sub-area h">
        <CompSeat id="59" />
        <CompSeat id="60" />
        <CompSeat id="61" />
        </div>
        <div class="sub-area h">
        <CompSeat id="62" />
        <CompSeat id="63" />
        <CompSeat id="64" />
        </div>
      </div>
      <div class="area area-9 v">
        <div class="sub-area h">
        <CompSeat id="65" />
        <CompSeat id="66" />
        <CompSeat id="67" />
        </div>
        <div class="sub-area h">
        <CompSeat id="68" />
        <CompSeat id="69" />
        <CompSeat id="70" />
        </div>
      </div>
      <div class="area area-10 v">
        <div class="sub-area h">
        <CompSeat id="71" />
        <CompSeat id="72" />
        <CompSeat id="73" />
        </div>
        <div class="sub-area h">
        <CompSeat id="74" />
        <CompSeat id="75" />
        <CompSeat id="76" />
        </div>
      </div>
      <div class="area area-11 v">
        <div class="sub-area h">
        <CompSeat id="77" />
        <CompSeat id="78" />
        <CompSeat id="79" />
        </div>
        <div class="sub-area h">
        <CompSeat id="80" />
        <CompSeat id="81" />
        <CompSeat id="82" />
        </div>
      </div>
    </div>
  </div>

      <div class="area area-12 h">
      <CompSeat id="83" />
      <CompSeat id="84" />
      <CompSeat id="85" />
      </div>
    </div>
  </div>
</template>

<script>
import CompSeat from './CompSeat'
export default {
  name: 'CompFloor23',
  components: {
    CompSeat
  }
}
</script>

<style>
.comp-floor-23 {
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
.area-2 {
  padding-left: 20px;
}
.area-4 {
 padding-top: 80px;
 padding-left: 100px;
}
.area-5 {
 padding-top: 10px;
 padding-bottom: 50px;
}
.area-6 {
  margin: 4px;
}
.area-7 {
  margin: 4px;
}
.area-8 {
  padding-left: 100px;
  margin: 2px;
}
.area-9 {
  padding-left: 100px;
  margin: 2px;
}
.area-10 {
  padding-left: 100px;
  margin: 2px;
}
.area-11 {
  padding-left: 100px;
  margin: 2px;
}
</style>
