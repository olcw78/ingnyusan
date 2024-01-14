export function replaceStyles(md: String): String {
	// h1
	let res = md.replaceAll("<h1 ", "<h1 class='text-4xl text-bold my-14' ");

	// h2
	res = res.replaceAll("<h2 ", "<h1 class='text-3xl my-12' ");

	// h3
	res = res.replaceAll("<h3 ", "<h1 class='text-2xl my-10' ");

	// h4
	res = res.replaceAll("<h4 ", "<h1 class='text-xl my-8' ");

	// hr
	res = res.replaceAll("<hr>", "<hr class='my-10'>");

	// p
	res = res.replaceAll("<p ", "<p class='text-slate-700' ");
	res = res.replaceAll("<p>", "<p class='text-slate-500'>");

	// li
	res = res.replaceAll("<li>", "<li class='text-slate-500'>- ");

	// pre
	res = res.replaceAll(
		"<pre ",
		"<pre class='my-5 rounded-ml' style='padding: 1rem 1.2rem; border-radius: 10px; background-color: #24292e; overflow-x: auto;' ",
	);

	// a
	res = res.replaceAll("<a ", '<a class="text-orange-500 underline" ');

	return res;
}
