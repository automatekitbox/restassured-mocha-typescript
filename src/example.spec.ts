import {assert, expect} from "chai";
import { Example } from "./example";
import {makeHttpRequest, prettyPrintJSON, validateJsonResponse} from "rest-assured-ts";

suite("Example", () => {
  let o: Example;

  setup(() => {
    o = new Example();
  });

  test("sync", () => {
    assert.equal(o.sync(), "sync");
  });

  test("asyncCallback", (done) => {
    o.asyncCallback((value) => {
      assert.equal(value, "asyncCallback");
      done();
    });
  });

  test("asyncPromise", async () => {



    const response = await makeHttpRequest("https://gorest.co.in/public-api/users");

   const map1: Map<string, string> = new Map();
    map1.set("name", "Enakshi Tandon");
    map1.set("email", "naik_chandra@lockman-wiegand.net");

    validateJsonResponse(JSON.parse(response.body), map1);
    console.log(prettyPrintJSON(JSON.parse(response.body)));
    //assert.equal(prettyPrintJSON(JSON.parse(response.body)), "kkkk");
   // assert.equal(add(2, 4), 4);



  });
});
