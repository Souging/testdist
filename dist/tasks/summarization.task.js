"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SummarizationTask = void 0;
const common_1 = require("@nestjs/common");
const wikipedia_repository_1 = require("../repositories/wikipedia.repository");
const ollama_repository_1 = require("../repositories/ollama.repository");
const fs = require('fs');
const path = require('path');
const filePath = path.join('/root/app/dist2', 'task.json');
const jsonData = readJsonFile(filePath);

function readJsonFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf-8'); // 同步读取文件
        return JSON.parse(data); // 解析为 JavaScript 对象
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return null;
    }
}
function getRandomItem(jsonArray) {
    if (!Array.isArray(jsonArray) || jsonArray.length === 0) {
        console.error('Invalid or empty array');
        return null;
    }
    const randomIndex = Math.floor(Math.random() * jsonArray.length); // 随机索引
    return jsonArray[randomIndex];
}


let SummarizationTask = class SummarizationTask {
    constructor(wikipediaRepository, ollamaRepository) {
        this.wikipediaRepository = wikipediaRepository;
        this.ollamaRepository = ollamaRepository;
    }
    async run() {
        const randomItem = getRandomItem(jsonData);
        const title = randomItem.Title;
        const content = randomItem.Content;
        const question = randomItem.Question;
        const answer = randomItem.Answer;
        return {
            input: question,
            output: answer,
            context: { content, title: title },
            task: 'wikipedia_summarization',
        };
    }
};
exports.SummarizationTask = SummarizationTask;
exports.SummarizationTask = SummarizationTask = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wikipedia_repository_1.WikipediaRepository,
        ollama_repository_1.OllamaRepository])
], SummarizationTask);
//# sourceMappingURL=summarization.task.js.map