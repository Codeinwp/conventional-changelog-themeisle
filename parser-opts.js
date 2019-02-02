'use strict'

module.exports = {
	headerPattern: /^(\w*)(?:\((.*)\))?: (.*)$/,
	headerCorrespondence: [
		`type`,
		`scope`,
		`subject`
	],
	mergePattern: /^Merge pull request #(\d+) from (.*)$/,
	mergeCorrespondence: ['id', 'source'],
	noteKeywords: [`BREAKING CHANGE`],
	revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
	revertCorrespondence: [`header`, `hash`]
}
