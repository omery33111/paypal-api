from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, BasePermission

from product.serializers import ProductSerializer

from category.serializers import CategorySerializer



class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_staff
    


# ------------------------- PRODUCT START ------------------------- #
@api_view(["POST"])
# @permission_classes([IsAuthenticated, IsStaff])
def post_product(request):
    if request.method == "POST":
        serializer = ProductSerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
# ------------------------- PRODUCT END ------------------------- #
    


# ------------------------- CATEGORY START ------------------------- #
@api_view(["POST"])
# @permission_classes([IsAuthenticated, IsStaff])
def post_category(request, pk = -1):
    if request.method == "POST":
        serializer = CategorySerializer(data = request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
# ------------------------- CATEGORY END ------------------------- #
