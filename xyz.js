import express from 'express';
import permit from './../../../permissions/permission';
import * as repositoryController from './repository.controller';

import {
    catchError
} from './../../../errors/error';

let router = express.Router({
    mergeParams: true
});

router.get('/', permit('repositories'), catchError(repositoryController.index));

module.exports = router;
