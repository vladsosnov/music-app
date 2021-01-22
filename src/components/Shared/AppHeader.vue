<template>
  <div class="app-header vs-container">
    <nav class="app-header__nav">
      <ul class="nav-list">
        <li class="nav-list__item">
          <router-link
            :to="{ name: 'Index' }"
            class="link"
            active-class="link--active"
            exact
          >
            Main
          </router-link>
        </li>
        <li class="nav-list__item">
          <router-link
            :to="{ name: 'Search' }"
            class="link"
            active-class="link--active"
          >
            Search
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.app-header {
  &__nav {
    padding: 32px 0;

    .nav-list {
      display: flex;
      justify-content: flex-end;

      &__item {
        font-size: 20px;

        &:not(:last-child) {
          margin-right: 16px;
        }

        .link {
          color: #000;
          text-decoration: none;

          &:focus {
            outline: none;
          }

          &--active {
            font-weight: 700;
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
