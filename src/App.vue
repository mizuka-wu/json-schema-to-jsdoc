<template>

  <el-container id="app">
    <el-header>
      <h1>Json-Schema to jsdoc</h1>
    </el-header>
    <el-main>
      <el-row :gutter="32">
        <el-col :span="12">
          <h3>
            JSON-Schema
            <transition name="el-fade-in-linear">
              <b
                v-show="error"
                style="color: #F56C6C; font-size: 12px;"
              >{{error}}</b>
            </transition>
          </h3>
          <codemirror v-model="schema.body" />
          <div style="margin-top: 10px; text-align: right;">
            <el-button
              @click="schema2jsdoc"
              size="small"
              type="primary"
            >GO</el-button>
          </div>
        </el-col>
        <el-col :span="12">
          <h3>JSDoc</h3>
          <codemirror :value="jsdoc" />
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <a href="https://github.com/mizuka-wu/json-schema-to-jsdoc">View on github</a>
    </el-footer>
  </el-container>
</template>

<script>
import { Message } from "element-ui";
import jsonschema2jsdoc from "./plugins/jsonschema2jsdoc";
import debounce from "debounce";
export default {
  name: "app",
  data() {
    return {
      rows: 20,
      schema: {
        body: localStorage.getItem("schema-body") || "",
        name: ""
      },
      jsdoc: "",
      error: ""
    };
  },
  methods: {
    schema2jsdoc() {
      try {
        let text = this.schema.body;
        let schemaObject = eval("(" + text + ")");
        // let schemaObject = JSON.parse(text);
        let jsdoc = jsonschema2jsdoc(schemaObject, {
          id: this.schema.name
        });
        this.jsdoc = jsdoc;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        Message({
          showClose: true,
          message: e.message,
          type: "error"
        });
      }
    }
  },
  watch: {
    "schema.body": {
      handler: debounce(function(text) {
        this.error = "";
        if (text && !text.includes("id")) {
          this.error = "schema has no id property";
        }
        localStorage.setItem("schema-body", text);
      }, 300)
    }
  }
};
</script>
<style>
body {
  margin: 0;
  background: #eeeeee;
  padding: 5px;
}
</style>

