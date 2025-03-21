import axios from "axios";

class SkipsController {

    public async fetchAll() {
        try {
            const skips = await axios
                .get("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
                .then(response => response.data)
            return skips;
        } catch (err) {
            throw err
        }
    }

}


const skipsController = new SkipsController()

export default skipsController;