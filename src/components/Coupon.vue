<template>
  <div class="coupon">
    <div class="card">
      <div class="card-body text-left col">
        <h4 class="col font-weight-bold">{{ this.title }}</h4>
        <p class="col-auto">{{this.text}}</p>
        <div class="col row">
          <div class="col-6 text-left">
            <h4 class="card-percentage font-weight-bold">{{ !(this.percentage > 0) || this.percentage == 100 ? 'Gratis' : this.percentage > 100 ? '100%' : this.percentage + '%' }}</h4>
          </div>
          <div class="col-6 text-right">
            <h4 class="card-value font-weight-bold">{{ this.value + " FP" }}</h4>
          </div>
        </div>
      </div>
      <button class="btn card-edit btn-primary">
        <i class="fas fa-pen"></i>
      </button>
      <button class="btn card-delete btn-danger">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coupon",
  props:['title', 'text', 'percentage', 'value']
}
</script>

<style scoped lang="scss">

*{
  --primary: #10cdb7;
}

.coupon {
  .card-edit {
    position: absolute;
    right: -10px;
    top: -20px;
  }
  .card-delete {
    position: absolute;
    right: -10px;
    top: 30px;
  }
  .card-percentage{
  }
  .card-value {
    color: var(--primary);
  }
  .card {
    transition: 0.3s;
    &:hover {
      box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.15);
    }
  }
  .card-image-overlay span {
    display: inline-block;
  }
}

.btn {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  transition: .2s;
  &:hover{
    border-radius: 8px;
  }
}

</style>