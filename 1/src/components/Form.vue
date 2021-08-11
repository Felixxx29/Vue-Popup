<template>
  <div class="form-container">
    <router-link to="/" class="closeContainer">
      <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z"/>
      </svg>
    </router-link>
    <h1 class="title">Налоговый вычет</h1>
    <p class="description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета
      составляет не более 13% от своего официального годового дохода.</p>
    <h3 id="salary">Ваша зарплата в месяц</h3>
    <input
        v-mask="'## ###' + ' ₽'"
        type="text"
        placeholder="Введите данные"
        id="inputSalary"
        v-model="income"
    >
    <a href="#" id="count" @click="showDiv">Рассчитать</a>
    <div v-if="show === true">
      <h3 id="priceTitle">Итого можете внести в качестве досрочных:</h3>
      <div v-for="pay in pays" :key="pay.year" class="pay">
        <label :for="pay.text" class="checkboxContainer" :class="{'checked':pay.checked}" @click="pay.checked = !pay.checked">
          <input type="checkbox" :checked="pay.checked" :value="pay.text" class="checkbox">
          <span class="label"><svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.45455 8.70149L1.11364 5.25373L0 6.40299L4.45455 11L14 1.14925L12.8864 0L4.45455 8.70149Z" fill="white"/>
          </svg>
          </span>
        </label>
        <div class="labelText">
          {{ pay.payment }} рублей <span>в {{ pay.year }}-ый год</span>
        </div>
      </div>
    </div>
    <div id="less">
      <span id="lessText">Что уменьшаем?</span>
      <button @click="select(button)" class="lessButton" :class="{ 'selected': button.selected }"
              v-for="button in buttons">{{ button.text }}
      </button>
    </div>
    <button id="add">Добавить</button>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      show: false,
      income: '50 000',
      buttons: [{
        text: 'Платеж',
        selected: true
      }, {
        text: 'Срок',
        selected: false
      }],
      pays: [
        {
          text: '',
          payment: '',
          checked: true,
          year: '1'
        },
        {
          text: '',
          payment: '',
          checked: true,
          year: '2'
        },
        {
          text: '',
          payment: '',
          checked: true,
          year: '3'
        },
        {
          text: '',
          payment: '',
          checked: false,
          year: '4'
        },
      ]
    }
  },
  methods: {
    select(sel) {
      for (let i = 0; i < this.buttons.length; i++) {
        this.buttons[i].selected = false
      }
      sel.selected = true
    },
    showDiv() {
      this.show = true
      let price = this.income
      price = price.split(" ").join("")
      let cutPrice = price.slice(0, -1)
      for (let i = 0; i < this.pays.length; i++) {
        if (this.pays[i].checked) {
          this.pays[i].payment = (+cutPrice * 1.56)
          this.pays[i].payment = parseInt(this.pays[i].payment)
        } else {
          this.pays[i].payment = (+cutPrice * 0.52)
          this.pays[i].payment = parseInt(this.pays[i].payment)
        }
      }
    },
  },
  watch: {

  }
}
</script>

<style scoped>
.form-container {
  position: relative;
  box-sizing: border-box;
  padding: 32px;
  border-radius: 30px;
  width: 552px;
  background: white;
}

.closeContainer {
  position: absolute;
  right: 27px;
  top: 27px;
}

.closeContainer svg {
  fill: #EA0029;
}

.closeContainer:hover {
  cursor: pointer;
}

.closeContainer:hover svg {
  fill: #F53A31;
}

.title {
  font-family: "LabGrotesque-Medium", sans-serif;
  font-size: 28px;
  color: #000000;
  margin: 0 0 16px;
  line-height: 40px;
}

.description {
  max-width: 425px;
  font-family: "LabGrotesque-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #808080;
  margin: 0 0 24px;
}

#salary {
  font-family: "LabGrotesque-Medium", sans-serif;
  font-size: 14px;
  color: #000000;
  margin: 0 0 8px;
  line-height: 24px;
}

#inputSalary {
  border: 1px solid #DFE3E6;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  padding: 8px 10px;
  font-family: "LabGrotesque-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  outline: none;
  margin-bottom: 8px;
}

#inputSalary:hover {
  border: 1px solid #000000;
}

#inputSalary::placeholder {
  font-family: "LabGrotesque-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #BEC5CC;
}

#count {
  font-family: "LabGrotesque-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #EA0029;
  text-decoration: none;
  display: inline-block;
}

#count:hover {
  color: #F53A31;
}

#less {
  margin-top: 24px;
}

#lessText {
  font-family: "LabGrotesque-Medium", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  margin-right: 32px;
}

.lessButton {
  padding: 6px 12px;
  border-radius: 50px;
  background: #EEF0F2;
  color: Black;
  border: none;
  outline: none;
  font-family: "LabGrotesque-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin-right: 16px;
}

.lessButton:hover {
  cursor: pointer;
  background: #EA0029;
  box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
  color: #FFFFFF;
}

.lessButton.selected {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
  color: #FFFFFF;
}

#add {
  margin-top: 40px;
  padding: 16px 0;
  width: 100%;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;
  font-family: "LabGrotesque-Medium", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  border: none;
  outline: none;
}

#add:hover {
  cursor: pointer;
  background: #EA0029;
  box-shadow: 0 0 24px rgba(234, 0, 41, 0.33);
}

#priceTitle {
  font-family: "LabGrotesque-Medium", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  margin: 16px 0;
}

.labelText {
  font-family: "LabGrotesque-Regular", sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}

.labelText span {
  color: #BEC5CC;
}

.checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkboxContainer {
  width: 20px;
  height: 20px;
  position: relative;
  font-size: 20px;
  box-sizing: border-box;
  border: 1px solid #DFE3E6;
  margin-right: 11px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkboxContainer:hover {
  cursor: pointer;
  border: 1px solid #000000;
}

.checkboxContainer.checked {
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  border: none;
}
.pay {
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid #DFE3E6;
  margin-bottom: 16px;
}

.pay:last-child {
  margin-bottom: 0;
}

label.label {
  display: block;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 871px) {
  .form-container {
    max-width: 453px;
  }
}

@media screen and (max-width: 453px) {
  .form-container {
    border-radius: 0;
    padding: 16px;
    min-height: 100vh;
    width: 100vw;
  }
  .title {
    margin-top: 16px;
    font-size: 18px;
    line-height: 24px;
  }
  .description {
    font-size: 12px;
    line-height: 16px;
  }

  #priceTitle {
    display: inline-block;
    width: 150px;
  }

  #less {
    width: 162px;
    margin-bottom: 96px;
  }

  #lessText {
    margin-bottom: 24px;
    display: inline-block;
  }

  .lessButton {
    margin-right: 8px;
  }
  #add {
    position: absolute;
    bottom: 16px;
    width: calc(100% - 32px);
  }
}
</style>