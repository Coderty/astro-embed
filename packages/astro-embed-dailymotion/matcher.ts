// Dailymotion URL patterns:
// - https://www.dailymotion.com/video/x8oz9jd
// - https://dailymotion.com/video/x8oz9jd
// - https://dai.ly/x8oz9jd
// - https://www.dailymotion.com/embed/video/x8oz9jd
const urlPattern =
	/(?=(\s*))\1(?:<a [^>]*?>)?(?=(\s*))\2(?:https?:\/\/)?(?:www\.)?(?:dailymotion\.com\/(?:video|embed\/video)\/|dai\.ly\/)([a-zA-Z0-9]+)(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)?(?=(\s*))\5/;

/**
 * Extract a Dailymotion video ID from a URL if it matches the pattern.
 * @param url URL to test
 * @returns A Dailymotion video ID or undefined if none matched
 */
export default function matcher(url: string): string | undefined {
	const match = url.match(urlPattern);
	return match?.[3];
}
