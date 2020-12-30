<template>
  <div class="coupon">
    <div class="card">
      <div class="card-body text-left col">
        <h5 class="col">{{ this.title }}</h5>
        <p class="col">{{this.text}}</p>
        <div class="col row">
          <div class="col-6 card-body text-left">
            <h3>{{ this.percentage === 0 ? 'Gratis' : this.percentage + '%' }}</h3>
          </div>
          <div class="col-6 card-body text-right">
            <h3 class="card-points">{{ this.value + " FP" }}</h3>
          </div>
        </div>
      </div>
      <button class="btn card-edit">
        <svg viewBox="0 0 16 16" class="edit bi bi-pencil"
             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
        </svg>
      </button>
      <button class="btn card-delete">
        <i><svg viewBox="0 0 16 16" class="delete bi bi-trash"
             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg></i>
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

<style scoped>

.coupon {
  margin: 30px 0 30px 0;
}

.btn {
  width: 40px;
  height: 40px;
}

.coupon .card-edit {
  background: #7A63F5;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.edit {
  width: 25px;
}

.coupon .card-delete {
  position: absolute;
  right: -10px;
  top: 30px;
  background: #F56363;
  border-radius: 50%;
  text-align: center;
  color: #fff;
}

.delete {
  width: 25px;
}


.coupon .card-points {
  border-radius: 50%;
  color: #10cdb7;
  font-weight: bold;
}

#coupon .card:hover {
  background: #fff;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  border-radius: 4px;
  transition: all 0.3s ease;
}

.coupon .card-image-overlay span {
  display: inline-block;
}

</style>