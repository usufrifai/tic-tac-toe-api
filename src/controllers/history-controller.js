
import { history } from '../db/index';

class HistoryController {

    static getHistory(req, res){
        res.send(history);
    };

    static saveHistory(req, res) {
        history.unshift(req.body)
        res.send(history);
    }
}

export default HistoryController;