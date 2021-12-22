<template>
  <div>
    <SfHero>
      <SfHeroItem
        title="ROG Republic of Gamers"
        subtitle="Collection 2021"
        button-text="Learn more"
        background="#ffffff"
        image="/b1.jpg"
      />
      <SfHeroItem
        title="Colorful summer dresses are already in store"
        subtitle="Summer Collection 2019"
        button-text="Learn more"
        background="#FCE4EC"
        image="/b2.jpg"
      />
    </SfHero>
    <laptops></laptops>
  </div>
</template>

<script>
import { SfHero } from '@storefront-ui/vue'
export default {
  components: {
    SfHero,
  },
}
</script>

<style lang="scss" scoped>
::v-deep .sf-hero-item__title,
::v-deep .sf-hero-item__subtitle {
  color: white;
}
::v-deep .sf-arrow {
  --icon-color: #ffffff;
  --button-background: transparent !important;
}
::v-deep .sf-arrow:hover {
  --icon-color: red;
}
// ::v-deep .sf-button {
//   --button-background: red;
// }

::v-deep .sf-hero__control--left,
.sf-hero__control--right .sf-button {
  background: transparent;
}
</style>
