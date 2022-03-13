<template>
  <div class="containers">
    <div class="icon">
        <div class="icon__circle"></div>
        <div class="icon__ellipse"></div>
    </div>

  </div>
</template>

<script>
export default {
    name:"LogInComponent"

}
</script>

<style scoped lang="scss">
.containers{
    width:43px;
    height: 43px;

    .icon{
        display:grid;
         width:43px;
            height: 43px;
            border: solid 1px #9D9D9D;
        border-radius: 50%;

        &__circle{
            width:12.67px;
            height:12.67px;
            border: solid 1px #9D9D9D;
            border-radius: 50%;
            margin-left:14px;
            margin-top: 9px;
           // margin:auto;

 }

            &__ellipse{
                width:19px;
                height: 13.02px;
                border-radius: 50% 50% 0 0 / 100% 100% 0 0;
                border: solid 1px #9D9D9D;
                border-bottom: 0;
                margin-left:14px;
            margin-top: 9px;

            }

    }



}

</style>