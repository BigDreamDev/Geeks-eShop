<template>
  <div>
    <SfHeader
      logo="/laptop.png"
      :logo-height="35"
      :logo-width="34"
      title="Storefront UI"
      cart-icon="empty_cart"
      wishlist-icon="heart"
      account-icon="profile"
      active-icon="account"
      search-placeholder="Search for items"
      search-value=""
      :wishlist-items-qty="0"
      :cart-items-qty="0"
      :is-sticky="false"
      :is-nav-visible="false"
    />
    <Nuxt />
    <SfFooter
      :column="4"
      multiple
      :open="['About us', 'Help', 'Social']"
      logo="/assets/logo.svg"
      title="Storefront UI"
    >
      <SfFooterColumn title="About us">
        <SfList>
          <SfListItem><SfMenuItem label="Who we are" /></SfListItem>
          <SfListItem><SfMenuItem label="Quality in the details" /></SfListItem>
          <SfListItem><SfMenuItem label="Customer Reviews" /></SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Departments">
        <SfList>
          <SfListItem><SfMenuItem label="Women fashion" /></SfListItem>
          <SfListItem><SfMenuItem label="Men fashion" /></SfListItem>
          <SfListItem><SfMenuItem label="Kidswear" /></SfListItem>
          <SfListItem><SfMenuItem label="Home" /></SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Help">
        <SfList>
          <SfListItem><SfMenuItem label="Customer service" /></SfListItem>
          <SfListItem><SfMenuItem label="Size guide" /></SfListItem>
          <SfListItem><SfMenuItem label="Contact us" /></SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn title="Payment & delivery">
        <SfList>
          <SfListItem><SfMenuItem label="Purchase terms" /></SfListItem>
          <SfListItem><SfMenuItem label="Guarantee" /></SfListItem>
        </SfList>
      </SfFooterColumn>
      <SfFooterColumn class="desktop-only" title="Social">
        <!-- <SfImage
          src="/assets/storybook/SfFooter/facebook.svg"
          alt="facebook"
          :width="32"
          :height="32"
        />
        <SfImage
          src="/assets/storybook/SfFooter/pinterest.svg"
          alt="pinterest"
          :width="32"
          :height="32"
        />
        <SfImage
          src="/assets/storybook/SfFooter/twitter.svg"
          alt="twitter"
          :width="32"
          :height="32"
        />
        <SfImage
          src="/assets/storybook/SfFooter/google.svg"
          alt="google"
          :width="32"
          :height="32"
        />
        <SfImage
          src="/assets/storybook/SfFooter/youtube.svg"
          alt="youtube"
          :width="32"
          :height="32"
        /> -->
      </SfFooterColumn>
      <SfFooterColumn class="desktop-only" title="Language">
        <button
          class="sf-button--pure sf-button"
          :aria-disabled="false"
          :link="null"
        >
          <!-- <SfImage
            src="/assets/storybook/SfFooter/flag.png"
            alt="flag of the USA"
            :width="20"
            :height="20"
          /> -->
          English
        </button>
      </SfFooterColumn>
      <SfFooterColumn class="desktop-only">
        <div>
          <SfInput
            class="sf-input--outline"
            type="text"
            placeholder="Type your email address"
          />
          <button class="sf-button" :aria-disabled="false" :link="null">
            Subscribe
          </button>
        </div>
      </SfFooterColumn>
      <div class="sf-footer-column smartphone-only">
        <div>
          <div class="sf-footer-column__title">Social</div>
          <div>
            <!-- <SfImage
              src="/assets/storybook/SfFooter/facebook.svg"
              alt="facebook"
              :width="32"
              :height="32"
            />
            <SfImage
              src="/assets/storybook/SfFooter/pinterest.svg"
              alt="pinterest"
              :width="32"
              :height="32"
            />
            <SfImage
              src="/assets/storybook/SfFooter/twitter.svg"
              alt="twitter"
              :width="32"
              :height="32"
            />
            <SfImage
              src="/assets/storybook/SfFooter/google.svg"
              alt="google"
              :width="32"
              :height="32"
            />
            <SfImage
              src="/assets/storybook/SfFooter/youtube.svg"
              alt="youtube"
              :width="32"
              :height="32"
            /> -->
          </div>
          <div>
            <SfInput
              class="sf-input--outline"
              type="text"
              placeholder="Type your email address"
            />
            <button class="sf-button" :aria-disabled="false" :link="null">
              Subscribe
            </button>
          </div>
          <SfLink link="#">
            <!-- <SfImage
              class="sf-footer__bottom-logo"
              src="/assets/logo.svg"
              alt="Storefront UI"
              :width="20"
              :height="20"
            /> -->
          </SfLink>
        </div>
      </div>
    </SfFooter>
  </div>
</template>

<script>
import {
  SfHeader,
  SfFooter,
  SfList,
  SfLink,
  SfMenuItem,
  SfInput,
} from '@storefront-ui/vue'
export default {
  components: {
    SfHeader,
    SfFooter,
    SfList,
    SfLink,
    SfMenuItem,
    SfInput,
  },
}
</script>

<style lang="scss">
@import '~@storefront-ui/vue/styles.scss';
:root {
  @include generate-color-variants(--_c-red-primary, #a82514);
  @include assign-color-variants(--c-primary, --_c-red-primary);
  @include assign-color-variants(--c-primary-variant, --_c-red-secondary);
}
</style>
