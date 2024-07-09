export default function useYoutubeScrapper() {
    const cors_anywhere = "https://cors-anywhere.herokuapp.com/"
    const getPlaylistVideos = async (playlistUrl) => {

        const response = await fetch(cors_anywhere + playlistUrl)
        const html = await response.text()
        const parser = new DOMParser()
        console.log(parser.parseFromString(html, "text/html"))
    }

    return { getPlaylistVideos }
}