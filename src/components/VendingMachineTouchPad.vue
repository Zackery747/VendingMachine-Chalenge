<template>
  <div>
    <!-- the users number input -->
    <div class="touch-pad-number">
      Number: {{ numberInput }}
    </div>
    <!-- touch pad -->
    <div class="touch-pad">
      <button
        v-for="(number, index) in 9"
        :key="`button-${index}`"
        class="touch-pad-button"
        :disabled="disableButtons"
        @click="addInputNumber((number).toString())"
      >
        {{ number }}
      </button>
      <!-- # -->
      <button
        class="touch-pad-button"
        @click="clearNumbers()"
      >
        C
      </button>
      <!-- 0 -->
      <button
        class="touch-pad-button"
        :disabled="disableButtons"
        @click="addInputNumber('0')"
      >
        {{ 0 }}
      </button>
      <!-- delete -->
      <button
        class="touch-pad-button"
        @click="deleteNumber()"
        :disabled="disableDeleteButtons"
      >
        <i class="el-icon-back"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup (props, { emit }) {
    const numberInput: Ref<string> = ref(props.modelValue)

    function addInputNumber (number: string): void {
      numberInput.value = `${numberInput.value}${number}`
      emit('update:modelValue', numberInput.value)
    }

    function clearNumbers (): void {
      numberInput.value = ''
      emit('update:modelValue', numberInput.value)
    }

    function deleteNumber ():void {
      numberInput.value = numberInput.value.substring(0, numberInput.value.length - 1)
      emit('update:modelValue', numberInput.value)
    }

    const disableButtons = computed((): boolean => {
      if (!numberInput.value) return false
      if (numberInput.value.length < 2) return false
      return true
    })

    const disableDeleteButtons = computed((): boolean => {
      if (!numberInput.value) return true
      if (numberInput.value.length <= 0) return true
      return false
    })

    return {
      numberInput,
      disableButtons,
      addInputNumber,
      clearNumbers,
      deleteNumber,
      disableDeleteButtons
    }
  }
})
</script>

<style scoped>
.touch-pad {
  width: 90%;
  margin: 5%;
  height: auto;
  background: #212F3C;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
}

.touch-pad-button {
  width: 30%;
  margin: 1.665%;
  height: 50px;
  background: #fff;
  border: none;
  border-radius: 3px;
  font-family: "Saira Stencil One", Arial, Helvetica, sans-serif;
  font-size: 25px;
}

.touch-pad-button:hover {
  background: rgb(204, 204, 204);
}

.touch-pad-number {
  width: 90%;
  height: 35px;
  margin-left: 5%;
  margin-bottom: 10px;
  background: #fff;
  border: 2px solid #000;
  color: #000;
  display: grid;
  align-items: center;
  justify-content: center;
  font-family: "Saira Stencil One", Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>
