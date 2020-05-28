STORYBOOK_DOCKERFILE	:= infra/docker/storybook/Dockerfile
STORYBOOK_NAME	   	 	:= smartbcity/r2-storybook
STORYBOOK_IMG	    	:= ${STORYBOOK_NAME}:${VERSION}
STORYBOOK_LATEST		:= ${REST_MOBI_NAME}:latest

test:
	@echo 'No test yet'

package: package-storybook

push: push-storybook

push-latest: push-storybook

package-storybook:
	@docker build -f ${STORYBOOK_DOCKERFILE} -t ${STORYBOOK_IMG} .

push-storybook:
	@docker push ${STORYBOOK_IMG}

push-latest-storybook:
	@docker tag ${STORYBOOK_IMG} ${STORYBOOK_LATEST}
	@docker push ${STORYBOOK_LATEST}
