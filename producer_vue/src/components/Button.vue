<template>
    <button @click="btnClicked">Vue Route</button>
  </template>
<script>

export default {
    methods : {
        btnClicked() {
            router.push('/vue/wacth')
        }
    }
}
</script>

