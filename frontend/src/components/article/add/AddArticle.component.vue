<template>
    <div class="row justify-content-md-center">
        <div class="col-6">
            <b-form-fieldset label="Title">
                <b-form-input v-model="title"></b-form-input>
            </b-form-fieldset>
            <b-form-fieldset label="Content">
                <b-form-input v-model="content"></b-form-input>
            </b-form-fieldset>

            <b-button size="sm">Register</b-button>
        </div>
    </div>
</template>

<script>
import AddArticleMixin from './AddArticle.mixin'

export default {
  mixins: [AddArticleMixin]
}
</script>
