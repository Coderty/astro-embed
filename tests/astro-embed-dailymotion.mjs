import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { renderDOM } from './utils/render.mjs';

const videoid = 'x8oz9jd';

test('it should render a lite-dailymotion element', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-dailymotion/Dailymotion.astro',
		{ id: videoid }
	);
	const embed = window.document.querySelector('lite-dailymotion');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it parses a Dailymotion URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-dailymotion/Dailymotion.astro',
		{ id: 'https://www.dailymotion.com/video/' + videoid }
	);
	const embed = window.document.querySelector('lite-dailymotion');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it parses a short dai.ly URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-dailymotion/Dailymotion.astro',
		{ id: 'https://dai.ly/' + videoid }
	);
	const embed = window.document.querySelector('lite-dailymotion');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it parses an embed URL', async () => {
	const { window } = await renderDOM(
		'./packages/astro-embed-dailymotion/Dailymotion.astro',
		{ id: 'https://www.dailymotion.com/embed/video/' + videoid }
	);
	const embed = window.document.querySelector('lite-dailymotion');
	assert.ok(embed);
	assert.is(embed.getAttribute('data-id'), videoid);
});

test('it can set a custom poster image', async () => {
	const poster = 'https://example.com/i.png';
	const { window } = await renderDOM(
		'./packages/astro-embed-dailymotion/Dailymotion.astro',
		{ id: videoid, poster }
	);
	const embed = window.document.querySelector('lite-dailymotion');
	assert.ok(embed);
	assert.is(embed.style['background-image'], `url('${poster}')`);
});

test.run();
