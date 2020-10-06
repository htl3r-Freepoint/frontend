<template>
  <div class="container">
    <label for="beschreibung" class="row">Example file input</label>
    <input type="file" class="form-control-file, row" id="beschreibung">
    <label for="color-picker">Select your favorite color:</label>
    <input type="color" id="color-picker" value="#ff0000"><br><br>
    <fieldset>
      <legend>
        Please select gender
      </legend>
      <input type="radio" name="gender" class="sr-only" id="male">
      <label for="male">
        <img src="http://findicons.com/files/icons/1688/web_blog/48/user_male_white_red_brown.png" alt="male">
      </label>
      <input type="radio" name="gender" class="sr-only" id="female">
      <label for="female">
        <img src="http://findicons.com/files/icons/1688/web_blog/48/user_female_white_pink_black.png" alt="female">
      </label>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "FlyerCustomizer",
  data: function () {
    return {
      title: ""
    };
  }
}
</script>

<style scoped>
label {
  cursor: pointer;
  filter: grayscale(100%);
}

label:hover {
  filter: grayscale(0);
}

input[type="radio"]:checked + label {
  filter: grayscale(0);
}
</style>
