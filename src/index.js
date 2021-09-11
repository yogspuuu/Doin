#!/usr/bin/env node

import prompt from 'prompt';
import apiKey from '../config/apiKey.js';
import withVirustotal from './withVirustotal.js';
import domainProperties from '../utils/domainValidator.js';

prompt.start();

prompt.get(domainProperties, async function(err, input) {
    if(err) { return onErr(err); }

	const result = await withVirustotal(apiKey.virustotal, input.domain);
    console.log(result);

    function onErr(err) {
	    console.log(err);
	    return 1;
	}
});



