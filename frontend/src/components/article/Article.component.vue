<template>
	<div class="row justify-content-md-center">
		<div class="col-6">
			{{ article }}
			<pre>
				[
					{
						name: 'Joe',
						password: 'toasty'
				}, {
						name: 'Anna',
						password: 'sunflower'
				}, {
						name: 'Tom',
						password: 'jerry'
					}
				]
			</pre>
		</div>
	</div>
</template>

<script>
import ArticleMixin from './Article.mixin'

export default {
  mixins: [ArticleMixin]
}
</script>
