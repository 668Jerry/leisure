/**
 * Created by lololol on 13/Jul/14.
 */
$(document).ready(function() {
    $('#likes').click(function(){ var catid = $(this).attr("data-catid"); $.get('/like_category/', {category_id: catid}, function(data){ $('#like_count').html(data); $('#likes').hide(); }); });
    $('#suggestion').keyup(function(){ var query = $(this).val(); $.get('/suggest_category/', {suggestion: query}, function(data){ $('#cats').html(data); }); });
	$('.rango-add').click(function(){ var catid = $(this).attr("data-catid"); var url = $(this).attr("data-url"); var title = $(this).attr("data-title"); var me = $(this); $.get('/rango/auto_add_page/', {category_id: catid, url: url, title: title}, function(data){ $('#pages').html(data); me.hide(); }); });
});